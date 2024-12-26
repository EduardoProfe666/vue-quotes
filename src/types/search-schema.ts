import InternationalizationSchema from "./internationalization-schema.ts";

export interface SearchSchema {
    enabled: boolean;
    placeholder?: string | InternationalizationSchema[];
    noResultsText?: string | InternationalizationSchema[];
}