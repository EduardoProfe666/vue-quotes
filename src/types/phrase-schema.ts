import InternationalizationSchema from "./internationalization-schema.ts";

export interface PhraseSchema {
  message: string | InternationalizationSchema[];
  footer?: string | InternationalizationSchema[];
  image?: string;
  badgeId?: string;
}