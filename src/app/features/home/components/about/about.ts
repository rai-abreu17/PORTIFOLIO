import { Component } from '@angular/core';
import { MILESTONES } from '../../../../data/portfolio.data';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly milestones = MILESTONES;
}
