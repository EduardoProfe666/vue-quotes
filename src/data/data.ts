import MetadataSchema from "../types/metadata-schema.ts";
import {PhraseSchema} from "../types/phrase-schema.ts";
import {GeneralsSchema} from "../types/generals-schema.ts";
import {ButtonsSchema} from "../types/buttons-schema.ts";
import {ThemeSchema} from "../types/theme-schema.ts";

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

// -------------------------------------------------------------------- //
export const themes: ThemeSchema = {
    light: {
        main: {
            background: 'bg-gradient-to-br from-light-background_from to-light-background_to',
            text: 'text-light-t text-5xl font-bold',
        },
        button: {
            background: 'bg-light-button_background hover:bg-light-button_hover_background',
            text: 'text-light-button_t hover:text-light-button_hover_t',
            icon: 'text-light-button_icon hover:text-light-button_hover_icon',
        },
        card: {
            background: 'bg-light-cd_background/90',
            text: 'text-light-cd_t',
            footer: 'text-light-cd_author',
            decorationFooter: 'bg-light-cd_footer',
            decorationText: 'bg-light-cd_decoration hover:bg-light-cd_hover_decoration',
        },
    },
    dark: {
        main: {
            background: 'bg-gradient-to-br from-dark-background_from to-dark-background_to',
            text: 'dark:text-dark-t text-5xl font-bold',
        },
        button: {
            background: 'bg-dark-button_background hover:bg-dark-button_hover_background ',
            text: 'text-dark-button_t hover:text-dark-button_hover_t',
            icon: 'text-dark-button_icon hover:text-dark-button_hover_icon',
        },
        card: {
            background: 'bg-dark-cd_background/90',
            text: 'text-dark-cd_t/90',
            footer: 'text-dark-cd_author',
            decorationFooter: 'bg-dark-cd_footer',
            decorationText: 'dark:bg-dark-cd_decoration dark:hover:bg-dark-cd_hover_decoration',
        },
    }
}