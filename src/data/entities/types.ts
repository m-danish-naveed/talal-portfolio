export interface SeoMeta {
  title: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  address: {
    title: string;
    lines: string[];
  };
  location: string;
}

export interface FooterConfig {
  copyright: string;
}

export interface SiteConfig {
  meta: SeoMeta;
  contact: ContactInfo;
  footer: FooterConfig;
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
}

export interface WorkItem {
  id: string;
  title: string;
  client: string;
  date: string;
  image: string;
  video: string;
  link: string;
}

// Page Specific Types
export interface Showreel {
  youtubeUrl: string;
  posterImage: string;
  videoMp4: string;
  videoWebm: string;
}

export interface HomeHero {
  headline: string[];
  showreel: Showreel;
}

export interface Logo {
  src: string;
  alt: string;
}

export interface Stat {
  value: number;
  label: string;
  suffix: string;
}

export interface Cta {
  videoMp4: string;
  videoWebm: string;
  posterImage: string;
  stats: Stat[];
}

export interface HomeConfig {
  hero: HomeHero;
  logos: Logo[];
  cta: Cta;
}

export interface PageHero {
  tag: string;
  headline: string;
}

export interface WorkConfig {
  hero: PageHero;
}

export interface ContactFormConfig {
  firstNameLabel: string;
  lastNameLabel: string;
  emailLabel: string;
  messageLabel: string;
  messagePlaceholder: string;
  termsText: string;
  submitButton: string;
  successMessage: string;
  errorMessage: string;
}

export interface ContactConfig {
  hero: PageHero;
  form: ContactFormConfig;
}

export interface Person {
  firstName: string;
  lastName: string;
  fullName: string;
  role: string;
  email: string;
  location: string;
  address: string[];
}
