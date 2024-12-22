import MetadataSchema from "../types/metadata-schema.ts";
import {PhraseSchema} from "../types/phrase-schema.ts";
import {GeneralsSchema} from "../types/generals-schema.ts";
import {ButtonsSchema} from "../types/buttons-schema.ts";
import {ThemeSchema} from "../types/theme-schema.ts";

// ---------------------------- 🧩 GENERALS 🧩 ---------------------------- //
export const generals: GeneralsSchema = {
    title: 'Quotes',
    randomPhrases: true,
};

// ---------------------------- 🔮 METADATA 🔮 ---------------------------- //
export const metadata: MetadataSchema = {};

// ---------------------------- 🗣️ PHRASES 🗣️ ---------------------------- //
export const phrases: PhraseSchema[] = [
    {message: 'Hello World!', footer: 'Someone'},
    {message: 'vue-quotes rocks 🤘', footer: 'An awesome guy'},
];

// ---------------------------- 🔳 BUTTONS 🔳 ---------------------------- //
export const buttons: ButtonsSchema = {
    socialButtonEnabled: true,
};

// ---------------------------- 🎨 THEMES 🎨 ---------------------------- //
export const themes: ThemeSchema = {
    light: {
        main: {
            background: 'bg-gradient-to-br from-slate-100 to-sky-200',
            text: 'text-slate-900 text-5xl font-bold',
        },
        button: {
            background: 'bg-sky-500 hover:bg-sky-600',
            text: 'text-white hover:text-white/90',
            icon: 'text-white hover:text-white/90',
        },
        card: {
            background: 'bg-white shadow-lg rounded-lg',
            text: 'text-slate-800',
            footer: 'text-sky-600',
            decorationFooter: 'bg-slate-200',
            decorationText: 'bg-sky-500 hover:bg-sky-600',
        },
    },
    dark: {
        main: {
            background: 'bg-gradient-to-br from-slate-900 to-slate-800',
            text: 'text-sky-300 text-5xl font-bold',
        },
        button: {
            background: 'bg-sky-500 hover:bg-sky-600',
            text: 'text-white hover:text-white/90',
            icon: 'text-white hover:text-white/90',
        },
        card: {
            background: 'bg-slate-800/90 rounded-lg shadow-lg',
            text: 'text-gray-200',
            footer: 'text-sky-400',
            decorationFooter: 'bg-white/10',
            decorationText: 'bg-sky-500 hover:bg-sky-600',
        },
    }
}

