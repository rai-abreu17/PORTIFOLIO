import { Component, computed, input } from '@angular/core';
import { techIconPath } from '../../utils/tech-icons';

@Component({
  selector: 'app-tool-chip',
  template: `
    @if (iconPath(); as path) {
      <svg class="tool-icon" viewBox="0 0 24 24" aria-hidden="true"><path [attr.d]="path" /></svg>
    }
    <span>{{ label() }}</span>
  `,
  styles: `
    :host {
      display: inline-flex;
      align-items: center;
      gap: 0.4em;
    }
    .tool-icon {
      width: 1.1em;
      height: 1.1em;
      flex: none;
      fill: currentColor;
    }
  `,
})
export class ToolChip {
  readonly label = input.required<string>();
  protected readonly iconPath = computed(() => techIconPath(this.label()));
}
