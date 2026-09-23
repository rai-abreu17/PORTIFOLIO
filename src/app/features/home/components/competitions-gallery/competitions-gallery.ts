import { NgOptimizedImage } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  computed,
  inject,
  signal,
} from '@angular/core';
import { COMPETITION_PHOTOS } from '../../../../data/portfolio.data';

@Component({
  selector: 'app-competitions-gallery',
  imports: [NgOptimizedImage],
  templateUrl: './competitions-gallery.html',
  styleUrl: './competitions-gallery.scss',
})
export class CompetitionsGallery implements AfterViewInit, OnDestroy {
  @ViewChild('rail') private rail?: ElementRef<HTMLDivElement>;
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly photos = COMPETITION_PHOTOS;
  protected readonly currentIndex = signal(0);
  protected readonly userPaused = signal(true);
  protected readonly focusPaused = signal(false);
  protected readonly reducedMotion = signal(false);
  protected readonly inViewport = signal(false);
  protected readonly dragging = signal(false);
  protected readonly transitioning = signal(false);
  protected readonly autoplayActive = computed(
    () => this.inViewport() && !this.userPaused() && !this.focusPaused() && !this.reducedMotion(),
  );

  private timer?: ReturnType<typeof setInterval>;
  private mediaQuery?: MediaQueryList;
  private scrollFrame?: number;
  private visibilityObserver?: IntersectionObserver;
  private resizeObserver?: ResizeObserver;
  private dragStartX = 0;
  private dragStartScroll = 0;
  private scrollToken = 0;

  private readonly onMotionChange = (event: MediaQueryListEvent): void => {
    this.reducedMotion.set(event.matches);
    this.updateSlideVisuals();
  };

  ngAfterViewInit(): void {
    if ('IntersectionObserver' in window) {
      this.visibilityObserver = new IntersectionObserver(
        ([entry]) => this.inViewport.set(entry.isIntersecting),
        { threshold: 0.18 },
      );
      this.visibilityObserver.observe(this.host.nativeElement);
    }

    if (typeof window.matchMedia === 'function') {
      this.mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      this.reducedMotion.set(this.mediaQuery.matches);
      this.mediaQuery.addEventListener('change', this.onMotionChange);
    } else {
      this.reducedMotion.set(true);
    }

    if ('ResizeObserver' in window && this.rail) {
      this.resizeObserver = new ResizeObserver(() => this.updateSlideVisuals());
      this.resizeObserver.observe(this.rail.nativeElement);
    }

    requestAnimationFrame(() => {
      const firstSlide = this.realSlides()[0];
      if (firstSlide) this.centerInstantly(firstSlide);
      this.updateSlideVisuals();
    });

    this.timer = setInterval(() => {
      if (!this.autoplayActive()) return;
      void this.step(1);
    }, 5200);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
    if (this.scrollFrame) cancelAnimationFrame(this.scrollFrame);
    this.visibilityObserver?.disconnect();
    this.resizeObserver?.disconnect();
    this.mediaQuery?.removeEventListener('change', this.onMotionChange);
  }

  protected onClickPrevious(): void {
    this.pauseAfterInteraction();
    void this.step(-1);
  }

  protected onClickNext(): void {
    this.pauseAfterInteraction();
    void this.step(1);
  }

  protected onClickDot(index: number): void {
    this.pauseAfterInteraction();
    void this.scrollTo(index);
  }

  protected onClickToggleAutoplay(): void {
    this.userPaused.update((paused) => !paused);
  }

  protected onFocusIn(): void {
    this.focusPaused.set(true);
  }

  protected onFocusOut(event: FocusEvent): void {
    const section = event.currentTarget as HTMLElement;
    if (event.relatedTarget instanceof Node && section.contains(event.relatedTarget)) return;
    this.focusPaused.set(false);
  }

  protected onRailKeydown(event: KeyboardEvent): void {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    event.key === 'ArrowLeft' ? this.onClickPrevious() : this.onClickNext();
  }

  protected onPointerDown(event: PointerEvent): void {
    this.pauseAfterInteraction();
    this.scrollToken++;
    this.transitioning.set(false);
    if (event.pointerType !== 'mouse' || !this.rail) return;
    this.dragging.set(true);
    this.dragStartX = event.clientX;
    this.dragStartScroll = this.rail.nativeElement.scrollLeft;
    this.rail.nativeElement.setPointerCapture(event.pointerId);
  }

  protected onPointerMove(event: PointerEvent): void {
    if (!this.dragging() || !this.rail) return;
    event.preventDefault();
    this.rail.nativeElement.scrollLeft = this.dragStartScroll - (event.clientX - this.dragStartX);
  }

  protected onPointerUp(event: PointerEvent): void {
    if (!this.dragging() || !this.rail) return;
    this.dragging.set(false);
    if (this.rail.nativeElement.hasPointerCapture(event.pointerId)) {
      this.rail.nativeElement.releasePointerCapture(event.pointerId);
    }
  }

  protected onScroll(): void {
    if (!this.rail) return;
    if (this.scrollFrame) cancelAnimationFrame(this.scrollFrame);
    this.scrollFrame = requestAnimationFrame(() => {
      this.updateSlideVisuals();
      if (this.transitioning()) return;

      const slides = this.realSlides();
      const closest = this.closestFigure(slides);
      if (!closest) return;
      const index = slides.indexOf(closest);
      if (index >= 0) this.currentIndex.set(index);
    });
  }

  private async step(direction: 1 | -1): Promise<void> {
    const length = this.photos.length;
    const from = this.currentIndex();
    const to = (from + direction + length) % length;
    const wrapsForward = from === length - 1 && direction === 1;
    const wrapsBackward = from === 0 && direction === -1;
    this.currentIndex.set(to);
    this.transitioning.set(true);

    if (wrapsForward || wrapsBackward) {
      const clone = this.rail?.nativeElement.querySelector<HTMLElement>(
        wrapsForward ? '.clone-end' : '.clone-start',
      );
      if (!clone) {
        this.transitioning.set(false);
        return;
      }
      const token = await this.animateScrollTo(clone);
      if (token !== this.scrollToken) return;
      const realTarget = this.realSlides()[to];
      if (realTarget) this.centerInstantly(realTarget);
      this.transitioning.set(false);
      this.updateSlideVisuals();
      return;
    }

    const target = this.realSlides()[to];
    if (!target) {
      this.transitioning.set(false);
      return;
    }
    const token = await this.animateScrollTo(target);
    if (token === this.scrollToken) this.transitioning.set(false);
  }

  private realSlides(): HTMLElement[] {
    return this.rail
      ? Array.from(this.rail.nativeElement.querySelectorAll<HTMLElement>('[data-slide]'))
      : [];
  }

  private allSlides(): HTMLElement[] {
    return this.rail
      ? Array.from(this.rail.nativeElement.querySelectorAll<HTMLElement>('figure'))
      : [];
  }

  private closestFigure(figures: HTMLElement[]): HTMLElement | null {
    const rail = this.rail?.nativeElement;
    if (!rail) return null;
    const center = rail.scrollLeft + rail.clientWidth / 2;
    let closest: HTMLElement | null = null;
    let closestDistance = Number.POSITIVE_INFINITY;
    figures.forEach((figure) => {
      const distance = Math.abs(figure.offsetLeft + figure.offsetWidth / 2 - center);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = figure;
      }
    });
    return closest;
  }

  private updateSlideVisuals(): void {
    const rail = this.rail?.nativeElement;
    if (!rail || this.reducedMotion()) return;

    const center = rail.scrollLeft + rail.clientWidth / 2;
    const influence = Math.max(rail.clientWidth * 0.62, 1);
    this.allSlides().forEach((slide) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const proximity = 1 - Math.min(1, Math.abs(slideCenter - center) / influence);
      const eased = proximity * proximity * (3 - 2 * proximity);

      slide.style.setProperty('--slide-opacity', (0.32 + eased * 0.68).toFixed(3));
      slide.style.setProperty('--slide-scale', (0.92 + eased * 0.08).toFixed(4));
      slide.style.setProperty('--image-scale', (1.045 - eased * 0.045).toFixed(4));
      slide.style.setProperty('--caption-opacity', (0.28 + eased * 0.72).toFixed(3));
      slide.style.setProperty('--caption-offset', `${((1 - eased) * 0.65).toFixed(3)}rem`);
    });
  }

  private animateScrollTo(target: HTMLElement): Promise<number> {
    const rail = this.rail?.nativeElement;
    const myToken = ++this.scrollToken;
    if (!rail || this.reducedMotion()) {
      this.centerInstantly(target);
      return Promise.resolve(myToken);
    }

    const startLeft = rail.scrollLeft;
    const endLeft = target.offsetLeft + target.offsetWidth / 2 - rail.clientWidth / 2;
    const delta = endLeft - startLeft;
    const duration = Math.min(580, Math.max(420, Math.abs(delta) * 0.6));
    const start = performance.now();
    const easeInOutCubic = (progress: number): number =>
      progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    return new Promise((resolve) => {
      const tick = (now: number): void => {
        if (myToken !== this.scrollToken) {
          resolve(myToken);
          return;
        }
        const progress = Math.min(1, (now - start) / duration);
        rail.scrollLeft = startLeft + delta * easeInOutCubic(progress);
        if (progress < 1) requestAnimationFrame(tick);
        else resolve(myToken);
      };
      requestAnimationFrame(tick);
    });
  }

  private centerInstantly(target: HTMLElement): void {
    const rail = this.rail?.nativeElement;
    if (!rail) return;
    rail.scrollLeft = target.offsetLeft + target.offsetWidth / 2 - rail.clientWidth / 2;
  }

  private pauseAfterInteraction(): void {
    this.userPaused.set(true);
  }

  private async scrollTo(index: number): Promise<void> {
    this.currentIndex.set(index);
    this.transitioning.set(true);
    const target = this.realSlides()[index];
    if (!target) {
      this.transitioning.set(false);
      return;
    }
    const token = await this.animateScrollTo(target);
    if (token === this.scrollToken) this.transitioning.set(false);
  }
}
