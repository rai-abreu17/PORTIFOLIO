import {
  siAngular,
  siArduino,
  siC,
  siCss,
  siDocker,
  siGithub,
  siHibernate,
  siHtml5,
  siJavascript,
  siNestjs,
  siOpenjdk,
  siPostgresql,
  siPython,
  siRedis,
  siSelenium,
  siSonarqubeserver,
  siSpringboot,
  siTypescript,
} from 'simple-icons';

const TECH_ICON_PATHS: Readonly<Record<string, string>> = {
  'Java 17': siOpenjdk.path,
  Java: siOpenjdk.path,
  'Spring Boot': siSpringboot.path,
  NestJS: siNestjs.path,
  'JPA / Hibernate': siHibernate.path,
  Angular: siAngular.path,
  'Angular 21': siAngular.path,
  TypeScript: siTypescript.path,
  JavaScript: siJavascript.path,
  HTML: siHtml5.path,
  CSS: siCss.path,
  PostgreSQL: siPostgresql.path,
  Redis: siRedis.path,
  'Git / GitHub': siGithub.path,
  Docker: siDocker.path,
  SonarQube: siSonarqubeserver.path,
  Selenium: siSelenium.path,
  Arduino: siArduino.path,
  Python: siPython.path,
  C: siC.path,
};

export function techIconPath(label: string): string | null {
  return TECH_ICON_PATHS[label] ?? null;
}
