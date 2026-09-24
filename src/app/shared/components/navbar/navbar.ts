import { Component, HostListener, signal } from '@angular/core';

interface NavItem {
  readonly label: string;
  readonly href: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  protected readonly menuOpen = signal(false);
  protected readonly darkTheme = signal(
    typeof document !== 'undefined' && document.documentElement.dataset['theme'] === 'dark',
  );

  protected readonly navigation: readonly NavItem[] = [
    { label: 'Projetos', href: '#projetos' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Stack', href: '#stack' },
    { label: 'Competições', href: '#competicoes' },
    { label: 'Sobre', href: '#sobre' },
  ];

  protected onClickToggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected toggleTheme(): void {
    const theme = this.darkTheme() ? 'light' : 'dark';
    this.darkTheme.set(theme === 'dark');
    document.documentElement.dataset['theme'] = theme;
    document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#0b1728' : '#f4f8fd',
    );

    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      // Theme switching still works when storage is unavailable.
    }
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closeMenu();
  }
}
