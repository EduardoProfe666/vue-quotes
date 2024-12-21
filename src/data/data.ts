import MetadataSchema from "../types/metadata-schema.ts";
import ThemeSchema from "../types/theme-schema.ts";
import {PhraseSchema} from "../types/phrase-schema.ts";
import {GeneralsSchema} from "../types/generals-schema.ts";
import {ButtonsSchema} from "../types/buttons-schema.ts";

export const generals: GeneralsSchema = {
    title: '',
};

// -------------------------------------------------------------------- //

export const metadata: MetadataSchema = {};

// -------------------------------------------------------------------- //

export const phrases: PhraseSchema[] = [];

// -------------------------------------------------------------------- //

export const buttons: ButtonsSchema = {
    socialButtonEnabled: true,
};

// -------------------------------------------------------------------- //

export const themes: ThemeSchema = {
    darkMode: {
        name: '',
        textColor: '',
        backgroundColor: '',
        authorColor: '',
        buttonIconColor: '',
        buttonTextColor: '',
    },
    lightMode: {
        name: '',
        textColor: '',
        backgroundColor: '',
        authorColor: '',
        buttonIconColor: '',
        buttonTextColor: '',
    },
};