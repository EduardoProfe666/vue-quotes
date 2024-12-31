import { PhraseSchema } from "../types/phrase-schema.ts";
import { GeneralsSchema } from "../types/generals-schema.ts";
import { ButtonsSchema } from "../types/buttons-schema.ts";
import { ThemeSchema } from "../types/theme-schema.ts";
import BadgeSchema from "../types/badge-schema.ts";
import { PhShootingStar } from "@phosphor-icons/vue";
import { SearchSchema } from "../types/search-schema.ts";
import LanguageSchema from "../types/language-schema.ts";

// ---------------------------- 🎯 GENERALS 🎯 ---------------------------- //
export const generals: GeneralsSchema = {
    title: "🍫 Frases de ChocolateMC",
    randomPhrases: true,
    internationalizationEnabled: false,
    author: "ChocolateMC",
    authorImage: "/author.png"
};

// ---------------------------- 🏷️ BADGES 🏷️ ---------------------------- //
export const badges: BadgeSchema[] = [
    {
        id: "new",
        name: "Nuevo",
        icon: PhShootingStar,
        background:
            "bg-green-100/90 hover:bg-green-200/95 transition duration-300 ease-in-out",
        backgroundDark:
            "bg-green-500/20 hover:bg-green-500/30 transition duration-300 ease-in-out",
        text: "text-green-950",
        textDark: "text-green-300",
    }
];

// ---------------------------- 💭 PHRASES 💭 ---------------------------- //
export const phrases: PhraseSchema[] = [
    {
        message: "Tú tienes tremendo perro churre en los cascañales, dichava'o de Marianao hace años. 👣",
    },
    {
        message: "Cállate, no hables más... Tú si eres un singa'o de verdad: mal amigo, traicionero, mal consorte... 🤬",
    },
    {
        message: "Coño mi hermano! Entra en caja, viejo, coge el hilo, viejo! Con la perra güira esa, con la cabeza esa, Hidrocefálico!!! 🤯",
    },
    {
        message: "Date 15 respetones, date 10 eskiusmis, 7 o 8 amsorri, y un gudbai broder 👋",
    },
    {
        message: "Porque tú puedes ser maricón, pero tú lo que no tienes es que esconderlo. Si tu eres maricón ponte la saya!! Ponte la saya descará 🏳️‍🌈",
    },
    {
        message: "Yo tengo la mestruación, tú sabes cómo? Que me corre de pierna a pierna! 🥵",
    },
    {
        message: "Sígueme llamando, loquita, que te voy a bloquear ahora mismo. Te voy a bloquear ahora mismo, para que te dejes de confianza 😡",
    },
    {
        message: "No puedes estar cogiendo los datos móviles para eso, vieja 🤨",
    },
    {
        message: "Hay wana fokiu, fokiu, wi ni wi nou 🎵... No me acuerdo del inglés ese porque no me lo sé 🫤",
    },
    {
        message: "Cuando me caigan, caiganme en alicóptero, en tanque de guerra y esa historia: yo ando enfermo de los nervios... Pa que no sepas pa que no esa talla. Asere yo me lo chupo 🔫",
    },
    {
        message: "La misma lloradera esa, por aquella jeva que se fue... Por eso te tienen que decir pipi triste asere 🥕",
    },
    {
        message: "Eh pero pero pero... Que salvaje esta?! 😐",
    },
    {
        message: "Un día vamos a amanecer con la boca llena de hormigas 😵🐜",
    },
    {
        message: "Otra cosa q se me olvidaba horita, antes que se me olvide antes de decirte algo; te voy a decir algo, algo antes decírtelo. Vaya te lo voy a repetir, me voy a contradecir y te lo voy a volver a repetir; cuando se me olvide te lo vuelvo a repetir: que tú eres una descará' simpática, eso yo lo sé hace años ☺️",
    },
    {
        message: "Yo soy negro, soy feo, pero soy tu asesino; no es la cara ni el cuerpo: es mi palón divino 🪵",
    },
];

// ---------------------------- 🔘 BUTTONS 🔘 ---------------------------- //
export const buttons: ButtonsSchema = {
    socialEnabled: true,
    exportActiveText: "Exportando...",
    exportSuccessNotification: "Frase exportada con éxito",
    exportFailedNotification: "Exportación fallida. Intente más tarde",
    lightModeTooltipText: "Cambiar a Modo Oscuro",
    darkModeTooltipText: "Cambiar a Modo Claro",
    exportText: "Exportado a Imagen",
    nextText: "Siguiente Frase",
    previousText: "Anterior Frase",
    languageText: "Seleccionar Lenguaje" ,
    searchText: "Buscar Frases",
    socialText: "Mi Portfolio",
    socialLink: "https://eduardoprofe666.github.io",
};

// ---------------------------- 🌐 LANGUAGES 🌐 ---------------------------- //
export const languages: LanguageSchema[] = [
    { id: "es", name: "Español" },
].sort((a, b) => a.name.localeCompare(b.name));

// ---------------------------- 🔍 SEARCH 🔍 ---------------------------- //
export const search: SearchSchema = {
    enabled: true,
    placeholder: "Buscar frases, autores o insignias...",
    noResultsText: "No se encontraron resultados",
};

// ---------------------------- 🎨 THEMES 🎨 ---------------------------- //
export const themes: ThemeSchema = {
    light: {
        main: {
            background: 'bg-gradient-to-br from-zinc-100 to-stone-400',
            text: 'text-zinc-800 text-5xl font-bold',
        },
        button: {
            background: 'bg-stone-500 hover:bg-stone-600',
            text: 'text-white hover:text-white/90',
            icon: 'text-white hover:text-white/90',
            navIcon: 'text-zinc-800 hover:text-zinc-800/90',
        },
        card: {
            background: 'bg-white shadow-lg rounded-lg',
            text: 'text-zinc-800',
            footer: 'text-stone-600',
            decorationFooter: 'bg-zinc-200',
            decorationText: 'bg-stone-500 hover:bg-stone-600',
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
        internationalization: {
            modalBackground: 'bg-white',
            itemBackground: 'hover:bg-stone-100',
            itemText: '',
            selectedText: 'font-semibold text-stone-600',
            selectedBackground: 'bg-stone-200',
        }
    },
    dark: {
        main: {
            background: 'bg-gradient-to-br from-zinc-900 to-zinc-800',
            text: 'text-stone-300 text-5xl font-bold',
        },
        button: {
            background: 'bg-stone-500 hover:bg-stone-600',
            text: 'text-white hover:text-white/90',
            icon: 'text-white hover:text-white/90',
            navIcon: 'text-white hover:text-white/90',
        },
        card: {
            background: 'bg-zinc-800/90 rounded-lg shadow-lg',
            text: 'text-gray-200',
            footer: 'text-stone-400',
            decorationFooter: 'bg-white/10',
            decorationText: 'bg-stone-500 hover:bg-stone-600',
        },
        search: {
            modalBackground: 'bg-zinc-800',
            inputBackground: 'bg-zinc-800',
            inputText: 'text-white',
            inputPlaceholder: 'text-gray-400',
            inputBorder: 'border-gray-700',
            closeButton: 'text-gray-400',
            closeButtonHover: 'hover:bg-gray-700 hover:text-gray-200',
            resultHover: 'hover:bg-zinc-700/50',
            resultText: 'text-white',
            resultSubtext: 'text-gray-400'
        },
        internationalization: {
            modalBackground: 'bg-zinc-800',
            itemBackground: 'hover:bg-stone-700',
            itemText: 'text-stone-300',
            selectedText: 'font-semibold text-stone-300',
            selectedBackground: 'bg-stone-800',
        }
    }
};
