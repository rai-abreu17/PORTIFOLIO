import { Component } from '@angular/core';
import { Home } from './features/home/home';
import { Footer } from './shared/components/footer/footer';
import { Navbar } from './shared/components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
