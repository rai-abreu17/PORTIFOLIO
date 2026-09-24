import { Component } from '@angular/core';
import { About } from './components/about/about';
import { CompetitionsGallery } from './components/competitions-gallery/competitions-gallery';
import { Contact } from './components/contact/contact';
import { ExperienceSection } from './components/experience/experience';
import { FeaturedProjects } from './components/featured-projects/featured-projects';
import { Hero } from './components/hero/hero';
import { TechStack } from './components/tech-stack/tech-stack';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    FeaturedProjects,
    ExperienceSection,
    TechStack,
    CompetitionsGallery,
    About,
    Contact,
  ],
  template: `
    <main>
      <div class="intro-block">
        <app-hero />
        <section class="skill-ribbon" aria-label="Tecnologias que uso">
          <ul class="section-shell">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Angular</li>
            <li>Java</li>
            <li>Git / GitHub</li>
          </ul>
        </section>
        <app-about />
      </div>
      <app-featured-projects />
      <app-experience />
      <app-tech-stack />
      <app-competitions-gallery />
      <app-contact />
    </main>
  `,
  styleUrl: './home.scss',
})
export class Home {}
