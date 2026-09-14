export const projectSlugs = [
  'everrealm-2d',
  'english-quest',
  'hurricane-emergency',
  'fluent',
] as const;

export type ProjectSlug = (typeof projectSlugs)[number];
