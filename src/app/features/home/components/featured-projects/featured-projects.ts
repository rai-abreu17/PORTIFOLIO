import { Component } from '@angular/core';
import { PROJECTS } from '../../../../data/portfolio.data';
import { ToolChip } from '../../../../shared/components/tool-chip/tool-chip';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-featured-projects',
  imports: [RevealDirective, ToolChip],
  templateUrl: './featured-projects.html',
  styleUrl: './featured-projects.scss',
})
export class FeaturedProjects {
  protected readonly projects = PROJECTS;
}
