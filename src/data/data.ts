import MetadataSchema from "../types/metadata-schema.ts";
import {PhraseSchema} from "../types/phrase-schema.ts";
import {GeneralsSchema} from "../types/generals-schema.ts";
import {ButtonsSchema} from "../types/buttons-schema.ts";
import {ThemeSchema} from "../types/theme-schema.ts";
import BadgeSchema from "../types/badge-schema.ts";
import {PhHeart} from "@phosphor-icons/vue";
import {SearchSchema} from "../types/search-schema.ts";
import LanguageSchema from "../types/language-schema.ts";

// ---------------------------- 🎯 GENERALS 🎯 ---------------------------- //
export const generals: GeneralsSchema = {
    title: [
        {languageId: 'en', message: '💘 Love Quotes'},
        {languageId: 'es', message: '💘 Frases de Amor'}
    ],
    randomPhrases: true,
    internationalizationEnabled: true,
};

// ---------------------------- 📝 METADATA 📝 ---------------------------- //
export const metadata: MetadataSchema = {
    title: [
        {languageId: 'en', message: '💘 Love Quotes'},
        {languageId: 'es', message: '💘 Frases de Amor'}
    ],
    author: 'EduardoProfe666 🎩',
    description: [
        {languageId: 'en', message: 'Some beautiful love quotes'},
        {languageId: 'es', message: 'Algunas frases de amor hermosas'}
    ],
    url: 'https://love-vue-quotes.onrender.com',
    language: [
        {languageId: 'en', message: 'en'},
        {languageId: 'es', message: 'es'},
    ],
    locale: [
        {languageId: 'en', message: 'en_US'},
        {languageId: 'es', message: 'es_ES'},
    ]
};

// ---------------------------- 🏷️ BADGES 🏷️ ---------------------------- //
export const badges: BadgeSchema[] = [
    {
        id: 'love',
        name: [
            { languageId: 'en', message: 'Love' },
            { languageId: 'es', message: 'Amor' }
        ],
        icon: PhHeart,
        background: 'bg-red-100/90 hover:bg-red-200/95 transition duration-300 ease-in-out',
        backgroundDark: 'bg-red-500/20 hover:bg-red-500/30 transition duration-300 ease-in-out',
        text: 'text-red-950',
        textDark: 'text-red-300'
    }
];

// ---------------------------- 💭 PHRASES 💭 ---------------------------- //
export const phrases: PhraseSchema[] = [
    {
        message: [
            {languageId: 'en', message: 'I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.'},
            {languageId: 'es', message: 'Soy egoísta, impaciente y un poco inseguro. Cometo errores, estoy fuera de control y a veces soy difícil de manejar. Pero si no puedes soportarme en mi peor momento, entonces seguro que no mereces tenerme en mi mejor momento.'}
        ],
        footer: 'Marilyn Monroe',
        badgeId: 'love',
        image: '/authors/marilyn_monroe.png',
    },
    {
        message: [
            {languageId: 'en', message: 'Dumbledore watched her fly away, and as her silvery glow faded he turned back to Snape, and his eyes were full of tears. "After all this time?" "Always," said Snape.'},
            {languageId: 'es', message: 'Dumbledore la observó volar lejos, y mientras su resplandor plateado se desvanecía, se volvió hacia Snape, y sus ojos estaban llenos de lágrimas. "¿Después de todo este tiempo?" "Siempre," dijo Snape.'}
        ],
        footer: 'J.K. Rowling, Harry Potter',
        badgeId: 'love',
        image: '/authors/jkr.png',
    },
    {
        message: [
            {languageId: 'en', message: 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.'},
            {languageId: 'es', message: 'La oscuridad no puede expulsar a la oscuridad: solo la luz puede hacerlo. El odio no puede expulsar al odio: solo el amor puede hacerlo.'}
        ],
        footer: 'Martin Luther King Jr.',
        badgeId: 'love',
        image: '/authors/mlk.png',
    },
    {
        message: [
            {languageId: 'en', message: 'Have you ever been in love? Horrible isn\'t it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up.'},
            {languageId: 'es', message: '¿Alguna vez has estado enamorado? Horrible, ¿verdad? Te hace tan vulnerable. Abre tu pecho y abre tu corazón, y significa que alguien puede entrar en ti y desordenarte.'}
        ],
        footer: 'Neil Gaiman',
        badgeId: 'love',
        image: '/authors/neil_gaiman.png',
    },
    {
        message: [
            {languageId: 'en', message: 'If I had a flower for every time I thought of you...I could walk through my garden forever.'},
            {languageId: 'es', message: 'Si tuviera una flor por cada vez que pienso en ti... podría caminar por mi jardín para siempre.'}
        ],
        footer: 'Alfred Tennyson',
        badgeId: 'love',
        image: '/authors/alfred_tennyson.png',
    },
];

// ---------------------------- 🔘 BUTTONS 🔘 ---------------------------- //
export const buttons: ButtonsSchema = {
    socialEnabled: true,
    exportActiveText: [
        {languageId: 'en', message: 'Exporting...'},
        {languageId: 'es', message: 'Exportando...'}
    ],
    exportSuccessNotification: [
        {languageId: 'en', message: 'Successfully Exported Phrase'},
        {languageId: 'es', message: 'Frase exportada con éxito'}
    ],
    exportFailedNotification: [
        {languageId: 'en', message: 'Export Failed. Try later'},
        {languageId: 'es', message: 'Exportación fallida. Intente más tarde'}
    ],
    lightModeTooltipText: [
        {languageId: 'en', message: 'Change to Dark Mode'},
        {languageId: 'es', message: 'Cambiar a Modo Oscuro'}
    ],
    darkModeTooltipText: [
        {languageId: 'en', message: 'Change to Light Mode'},
        {languageId: 'es', message: 'Cambiar a Modo Claro'}
    ],
    exportText: [
        {languageId: 'en', message: 'Export Image'},
        {languageId: 'es', message: 'Exportado a Imagen'},
    ],
    nextText: [
        {languageId: 'en', message: 'Next Quote'},
        {languageId: 'es', message: 'Siguiente Frase'},
    ],
    previousText: [
        {languageId: 'en', message: 'Previous Quote'},
        {languageId: 'es', message: 'Anterior Frase'},
    ],
    languageText: [
        {languageId: 'en', message: 'Select Language'},
        {languageId: 'es', message: 'Seleccionar Lenguaje'},
    ],
    searchText: [
        {languageId: 'en', message: 'Search Quotes'},
        {languageId: 'es', message: 'Buscar Frases'},
    ],
    socialText: [
        {languageId: 'en', message: 'My Portfolio'},
        {languageId: 'es', message: 'Mi Portfolio'},
    ],
    socialLink: 'https://eduardoprofe666.github.io'
};

// ---------------------------- 🌐 LANGUAGES 🌐 ---------------------------- //
export const languages: LanguageSchema[] = [
    {id: 'es', name: 'Español'},
    {id: 'en', name: 'English'},
].sort((a, b) => a.name.localeCompare(b.name));

// ---------------------------- 🔍 SEARCH 🔍 ---------------------------- //
export const search: SearchSchema = {
    enabled: true,
    placeholder: [
        { languageId: 'en', message: 'Search quotes, authors, or badges...' },
        { languageId: 'es', message: 'Buscar frases, autores o insignias...' }
    ],
    noResultsText: [
        { languageId: 'en', message: 'No results found' },
        { languageId: 'es', message: 'No se encontraron resultados' }
    ]
}

// ---------------------------- 🎨 THEMES 🎨 ---------------------------- //
export const themes: ThemeSchema = {
    light: {
        main: {
            background: 'bg-gradient-to-br from-pink-200 to-pink-300',
            text: 'text-pink-800 text-5xl font-bold',
        },
        button: {
            background: 'bg-pink-500 hover:bg-pink-600',
            text: 'text-white hover:text-white/90',
            icon: 'text-white hover:text-white/90',
            navIcon: 'text-pink-700 hover:text-pink-600',
        },
        card: {
            background: 'bg-white shadow-lg rounded-lg border border-pink-300',
            text: 'text-pink-700',
            decorationText: 'bg-pink-600/90',
            decorationFooter: 'bg-pink-600/90',
            footer: 'text-pink-500 font-semibold',
        },
        search: {
            modalBackground: 'bg-white',
            inputBackground: 'bg-pink-50 border border-pink-200',
            inputText: 'text-gray-900',
            inputPlaceholder: 'text-gray-500',
            inputBorder: 'border-gray-300',
            closeButton: 'text-gray-500',
            closeButtonHover: 'hover:bg-gray-100 hover:text-gray-700',
            resultHover: 'hover:bg-pink-100',
            resultText: 'text-gray-900',
            resultSubtext: 'text-gray-600',
        },
        internationalization: {
            modalBackground: 'bg-white',
            itemBackground: 'hover:bg-pink-100',
            itemText: 'text-pink-800',
            selectedBackground: 'bg-pink-200',
            selectedText: 'font-semibold text-pink-600',
        },
    },
    dark: {
        main: {
            background: 'bg-gradient-to-br from-purple-900 to-purple-800',
            text: 'text-purple-300 text-5xl font-bold',
        },
        button: {
            background: 'bg-purple-600 hover:bg-purple-700',
            text: 'text-white hover:text-white/90',
            icon: 'text-white hover:text-white/90',
            navIcon: 'text-white hover:text-white/90',
        },
        card: {
            background: 'bg-gray-800 rounded-lg shadow-lg border border-purple-700',
            text: 'text-gray-200',
            decorationText: 'bg-purple-600/90',
            decorationFooter: 'bg-purple-600/90',
            footer: 'text-purple-400 font-semibold',
        },
        search: {
            modalBackground: 'bg-gray-900',
            inputBackground: 'bg-gray-800 border border-gray-700',
            inputText: 'text-white',
            inputPlaceholder: 'text-gray-400',
            inputBorder: 'border-gray-600',
            closeButton: 'text-gray-400',
            closeButtonHover: 'hover:bg-gray-700 hover:text-gray-200',
            resultHover: 'hover:bg-gray-700/50',
            resultText: 'text-white',
            resultSubtext: 'text-gray-400',
        },
        internationalization: {
            modalBackground: 'bg-gray-900',
            itemBackground: 'hover:bg-purple-700/50',
            itemText: 'text-purple-300',
            selectedBackground: 'bg-purple-800',
            selectedText: 'font-semibold text-purple-300',
        },
    },
};


