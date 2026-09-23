import { Component } from '@angular/core';
import { PROFESSIONAL_LINKS } from '../../../../data/portfolio.data';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly links = PROFESSIONAL_LINKS;
}
