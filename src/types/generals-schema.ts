import InternationalizationSchema from "./internationalization-schema.ts";

export interface GeneralsSchema {
    title: string | InternationalizationSchema[];
    randomPhrases: boolean;
    internationalizationEnabled: boolean;
    author?: string | InternationalizationSchema[];
    authorImage?: string;
}
