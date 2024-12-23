import MetadataSchema from "../types/metadata-schema.ts";
import {PhraseSchema} from "../types/phrase-schema.ts";
import {GeneralsSchema} from "../types/generals-schema.ts";
import {ButtonsSchema} from "../types/buttons-schema.ts";
import {ThemeSchema} from "../types/theme-schema.ts";
import BadgeSchema from "../types/badge-schema.ts";
import {PhSparkle} from "@phosphor-icons/vue";
import {SearchSchema} from "../types/search-schema.ts";

// ---------------------------- 🧩 GENERALS 🧩 ---------------------------- //
export const generals: GeneralsSchema = {
    title: 'Quotes',
    randomPhrases: true,
};

// ---------------------------- 🔮 METADATA 🔮 ---------------------------- //
export const metadata: MetadataSchema = {};

// ---------------------------- 💎 BADGES 💎 ---------------------------- //
export const badges: BadgeSchema[] = [
    {
        id: 'new',
        name: 'New',
        icon: PhSparkle,
        background: 'bg-emerald-100/90 hover:bg-emerald-200/95',
        backgroundDark: 'bg-emerald-500/20 hover:bg-emerald-500/30',
        text: 'text-emerald-950',
        textDark: 'text-emerald-300'
    }
];

// ---------------------------- 🗣️ PHRASES 🗣️ ---------------------------- //
export const phrases: PhraseSchema[] = [
    {message: 'Hello World!', footer: 'Someone', badgeId: 'new'},
    {message: 'vue-quotes rocks 🤘', footer: 'An awesome guy'},
];

// ---------------------------- 🔳 BUTTONS 🔳 ---------------------------- //
export const buttons: ButtonsSchema = {
    socialButtonEnabled: true,
};

// ---------------------------- 🔍 SEARCH 🔍 ---------------------------- //
export const search: SearchSchema = {
    enabled: true,
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
            navIcon: 'text-slate-800 hover:text-slate-800/90',
        },
        card: {
            background: 'bg-white shadow-lg rounded-lg',
            text: 'text-slate-800',
            footer: 'text-sky-600',
            decorationFooter: 'bg-slate-200',
            decorationText: 'bg-sky-500 hover:bg-sky-600',
        },
        search: {
            modalBackground: 'bg-white',
            inputBackground: 'bg-white',
            inputText: 'text-gray-900',
            inputPlaceholder: 'text-gray-500',
            inputBorder: 'border-gray-200',
            closeButton: 'text-gray-500',
            closeButtonHover: 'hover:bg-gray-100 hover:text-gray-700',
            resultHover: 'hover:bg-gray-50',
            resultText: 'text-gray-900',
            resultSubtext: 'text-gray-600'
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
            navIcon: 'text-white hover:text-white/90',
        },
        card: {
            background: 'bg-slate-800/90 rounded-lg shadow-lg',
            text: 'text-gray-200',
            footer: 'text-sky-400',
            decorationFooter: 'bg-white/10',
            decorationText: 'bg-sky-500 hover:bg-sky-600',
        },
        search: {
            modalBackground: 'bg-slate-800',
            inputBackground: 'bg-slate-800',
            inputText: 'text-white',
            inputPlaceholder: 'text-gray-400',
            inputBorder: 'border-gray-700',
            closeButton: 'text-gray-400',
            closeButtonHover: 'hover:bg-gray-700 hover:text-gray-200',
            resultHover: 'hover:bg-slate-700/50',
            resultText: 'text-white',
            resultSubtext: 'text-gray-400'
        }
    }
}

