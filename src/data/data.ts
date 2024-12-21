import MetadataSchema from "../types/metadata-schema.ts";
import {PhraseSchema} from "../types/phrase-schema.ts";
import {GeneralsSchema} from "../types/generals-schema.ts";
import {ButtonsSchema} from "../types/buttons-schema.ts";

export const generals: GeneralsSchema = {
    title: 'Quotes',
    randomPhrases: true,
};

// -------------------------------------------------------------------- //

export const metadata: MetadataSchema = {};

// -------------------------------------------------------------------- //

export const phrases: PhraseSchema[] = [
    {message: 'Hello World!', footer: 'Someone'},
    {message: 'vue-quotes rocks 🤘', footer: 'An awesome guy'},
];

// -------------------------------------------------------------------- //

export const buttons: ButtonsSchema = {
    socialButtonEnabled: true,
};