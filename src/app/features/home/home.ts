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
      <app-hero />
      <app-featured-projects />
      <app-experience />
      <app-tech-stack />
      <app-competitions-gallery />
      <app-about />
      <app-contact />
    </main>
  `,
})
export class Home {}
