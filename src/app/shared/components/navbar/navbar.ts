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

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closeMenu();
  }
}
