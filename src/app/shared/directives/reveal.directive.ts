import { AfterViewInit, Directive, ElementRef, OnDestroy, inject } from '@angular/core';

@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const node = this.element.nativeElement;

    if (
      typeof window.matchMedia !== 'function' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      node.classList.add('is-revealed');
      return;
    }

    node.classList.add('reveal-ready');
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        node.classList.add('is-revealed');
        this.observer?.disconnect();
      },
      { threshold: 0.14, rootMargin: '0px 0px -6% 0px' },
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
