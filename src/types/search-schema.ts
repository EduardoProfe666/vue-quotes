import InternationalizationSchema from "./internationalization-schema.ts";

export interface SearchSchema {
    enabled: boolean;
    placeholder?: string | InternationalizationSchema[];
    noResultsText?: string | InternationalizationSchema[];
    buttonTooltip?: string | InternationalizationSchema[];
    modalTitle?: string | InternationalizationSchema[];
}