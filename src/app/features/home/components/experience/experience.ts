import { Component } from '@angular/core';
import { EXPERIENCES } from '../../../../data/portfolio.data';
import { ToolChip } from '../../../../shared/components/tool-chip/tool-chip';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [RevealDirective, ToolChip],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceSection {
  protected readonly experiences = EXPERIENCES;
}
