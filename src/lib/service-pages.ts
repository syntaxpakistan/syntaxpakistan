export type ServiceSub = { title: string; desc: string; points?: string[]; note?: string };
export type ServicePage = {
  slug: string;
  eyebrow: string;
  title: string;
  tagline: string;
  stats?: { value: string; label: string }[];
  subs: ServiceSub[];
  features: { title: string; desc: string }[];
  steps: { title: string; desc: string }[];
  deliverablesTitle: string;
  deliverablesDesc: string;
  deliverables: string[];
  applications?: { title: string; desc: string }[];
  resources?: { tag: string; title: string; desc: string }[];
  faqs?: { q: string; a: string }[];
  ctaTitle?: string;
  ctaDesc?: string;
  ctaPoints?: string[];
  sections?: {
    backHref?: string;
    backLabel?: string;
    subsEyebrow?: string;
    subsTitle?: string;
    subsDesc?: string;
    featuresEyebrow?: string;
    featuresTitle?: string;
    stepsEyebrow?: string;
    stepsTitle?: string;
    relatedEyebrow?: string;
    relatedTitle?: string;
  };
  related?: { href: string; eyebrow: string; title: string }[];
};

