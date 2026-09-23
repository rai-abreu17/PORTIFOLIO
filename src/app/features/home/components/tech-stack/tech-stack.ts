import { Component } from '@angular/core';
import { SKILL_GROUPS } from '../../../../data/portfolio.data';
import { ToolChip } from '../../../../shared/components/tool-chip/tool-chip';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-tech-stack',
  imports: [RevealDirective, ToolChip],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.scss',
})
export class TechStack {
  protected readonly groups = SKILL_GROUPS;
}
