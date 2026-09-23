export interface ProfessionalLink {
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
}

export interface PortfolioProject {
  readonly title: string;
  readonly context: string;
  readonly solution: string;
  readonly participation?: string;
  readonly result?: string;
  readonly year: string;
  readonly category: string;
  readonly focus: readonly string[];
  readonly technologies?: readonly string[];
  readonly evidence?: string;
  readonly caseStudy?: {
    readonly flow: readonly string[];
    readonly before: string;
    readonly after: string;
    readonly contributions: readonly {
      readonly area: string;
      readonly detail: string;
    }[];
  };
  readonly featured?: boolean;
}

export interface Experience {
  readonly role: string;
  readonly organization: string;
  readonly period: string;
  readonly summary: string;
  readonly technologies?: readonly string[];
}

export interface SkillGroup {
  readonly title: string;
  readonly items: readonly string[];
}

export interface Milestone {
  readonly value: string;
  readonly label: string;
  readonly detail: string;
}

export interface CompetitionPhoto {
  readonly src: string;
  readonly alt: string;
  readonly caption: string;
  readonly year: string;
  readonly width: number;
  readonly height: number;
}
