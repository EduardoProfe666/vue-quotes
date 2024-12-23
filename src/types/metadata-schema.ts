import InternationalizationSchema from "./internationalization-schema.ts";

export default interface MetadataSchema {
    title?: string | InternationalizationSchema[];
    description?: string | InternationalizationSchema[];
    language?: string | InternationalizationSchema[];
    locale?: string | InternationalizationSchema[];
    url?: string;
    image?: string;
    author?: string;
}