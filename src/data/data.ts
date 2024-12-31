import { PhraseSchema } from "../types/phrase-schema.ts";
import { GeneralsSchema } from "../types/generals-schema.ts";
import { ButtonsSchema } from "../types/buttons-schema.ts";
import { ThemeSchema } from "../types/theme-schema.ts";
import BadgeSchema from "../types/badge-schema.ts";
import { PhHeartBreak } from "@phosphor-icons/vue";
import { SearchSchema } from "../types/search-schema.ts";
import LanguageSchema from "../types/language-schema.ts";

// ---------------------------- 🎯 GENERALS 🎯 ---------------------------- //
export const generals: GeneralsSchema = {
  title: [
    { languageId: "en", message: "💔 Heartbreak Quotes" },
    { languageId: "es", message: "💘 Frases de Desamor" },
  ],
  randomPhrases: true,
  internationalizationEnabled: true,
};

// ---------------------------- 🏷️ BADGES 🏷️ ---------------------------- //
export const badges: BadgeSchema[] = [
  {
    id: "heartbreak",
    name: [
      { languageId: "en", message: "Heartbreak" },
      { languageId: "es", message: "Desamor" },
    ],
    icon: PhHeartBreak,
    background:
      "bg-blue-100/90 hover:bg-blue-200/95 transition duration-300 ease-in-out",
    backgroundDark:
      "bg-blue-500/20 hover:bg-blue-500/30 transition duration-300 ease-in-out",
    text: "text-blue-950",
    textDark: "text-blue-300",
  },
];

// ---------------------------- 💭 PHRASES 💭 ---------------------------- //
export const phrases: PhraseSchema[] = [
  {
    message: [
      {
        languageId: "en",
        message:
          "Every time your heart is broken, a doorway cracks open to a world full of new beginnings, new opportunities.",
      },
      {
        languageId: "es",
        message:
          "Cada vez que tu corazón se rompe, una puerta se abre a un mundo lleno de nuevos comienzos y nuevas oportunidades.",
      },
    ],
    footer: "Patti Roberts",
    badgeId: "heartbreak",
    image: "/authors/pr.png",
  },
  {
    message: [
      {
        languageId: "en",
        message:
          "Hearts will never be practical until they are made unbreakable.",
      },
      {
        languageId: "es",
        message:
          "Los corazones nunca serán prácticos hasta que sean hechos irrompibles.",
      },
    ],
    footer: "The Tinman, The Wizard of Oz",
    badgeId: "heartbreak",
    image: "/authors/tinman.png",
  },
  {
    message: [
      {
        languageId: "en",
        message:
          "Don't cry when the sun is gone, because the tears won't let you see the stars.",
      },
      {
        languageId: "es",
        message:
          "No llores cuando el sol se haya ido, porque las lágrimas no te dejarán ver las estrellas.",
      },
    ],
    footer: "Violeta Parra",
    badgeId: "heartbreak",
    image: "/authors/violeta-parra.png",
  },
  {
    message: [
      {
        languageId: "en",
        message:
          "That though the heart is breaking, happiness can exist in a moment, also. And because the moment in which we live is all the time there really is, we can keep going.",
      },
      {
        languageId: "es",
        message:
          "Que aunque el corazón esté roto, la felicidad también puede existir en un momento. Y dado que el momento en el que vivimos es todo el tiempo que realmente hay, podemos seguir adelante.",
      },
    ],
    footer: "Zora Neale Hurston",
    badgeId: "heartbreak",
    image: "/authors/zora.png",
  },
  {
    message: [
      {
        languageId: "en",
        message:
          "The shattering of a heart when being broken is the loudest quiet ever.",
      },
      {
        languageId: "es",
        message:
          "El quiebre de un corazón al romperse es el silencio más ruidoso que existe.",
      },
    ],
    footer: "Carroll Bryant",
    badgeId: "heartbreak",
    image: "/authors/cb.png",
  },
];

// ---------------------------- 🔘 BUTTONS 🔘 ---------------------------- //
export const buttons: ButtonsSchema = {
  socialEnabled: true,
  exportActiveText: [
    { languageId: "en", message: "Exporting..." },
    { languageId: "es", message: "Exportando..." },
  ],
  exportSuccessNotification: [
    { languageId: "en", message: "Successfully Exported Phrase" },
    { languageId: "es", message: "Frase exportada con éxito" },
  ],
  exportFailedNotification: [
    { languageId: "en", message: "Export Failed. Try later" },
    { languageId: "es", message: "Exportación fallida. Intente más tarde" },
  ],
  lightModeTooltipText: [
    { languageId: "en", message: "Change to Dark Mode" },
    { languageId: "es", message: "Cambiar a Modo Oscuro" },
  ],
  darkModeTooltipText: [
    { languageId: "en", message: "Change to Light Mode" },
    { languageId: "es", message: "Cambiar a Modo Claro" },
  ],
  exportText: [
    { languageId: "en", message: "Export Image" },
    { languageId: "es", message: "Exportado a Imagen" },
  ],
  nextText: [
    { languageId: "en", message: "Next Quote" },
    { languageId: "es", message: "Siguiente Frase" },
  ],
  previousText: [
    { languageId: "en", message: "Previous Quote" },
    { languageId: "es", message: "Anterior Frase" },
  ],
  languageText: [
    { languageId: "en", message: "Select Language" },
    { languageId: "es", message: "Seleccionar Lenguaje" },
  ],
  searchText: [
    { languageId: "en", message: "Search Quotes" },
    { languageId: "es", message: "Buscar Frases" },
  ],
  socialText: [
    { languageId: "en", message: "My Portfolio" },
    { languageId: "es", message: "Mi Portfolio" },
  ],
  socialLink: "https://eduardoprofe666.github.io",
};

// ---------------------------- 🌐 LANGUAGES 🌐 ---------------------------- //
export const languages: LanguageSchema[] = [
  { id: "es", name: "Español" },
  { id: "en", name: "English" },
].sort((a, b) => a.name.localeCompare(b.name));

// ---------------------------- 🔍 SEARCH 🔍 ---------------------------- //
export const search: SearchSchema = {
  enabled: true,
  placeholder: [
    { languageId: "en", message: "Search quotes, authors, or badges..." },
    { languageId: "es", message: "Buscar frases, autores o insignias..." },
  ],
  noResultsText: [
    { languageId: "en", message: "No results found" },
    { languageId: "es", message: "No se encontraron resultados" },
  ],
};

// ---------------------------- 🎨 THEMES 🎨 ---------------------------- //
export const themes: ThemeSchema = {
  light: {
    main: {
      background: "bg-gradient-to-br from-blue-100 to-purple-200",
      text: "text-gray-800 text-5xl font-bold",
    },
    button: {
      background: "bg-blue-500 hover:bg-blue-600",
      text: "text-white hover:text-white/90",
      icon: "text-white hover:text-white/90",
      navIcon: "text-gray-800 hover:text-gray-800/90",
    },
    card: {
      background: "bg-white shadow-lg rounded-lg",
      text: "text-gray-800",
      footer: "text-blue-600",
      decorationFooter: "bg-blue-100",
      decorationText: "bg-blue-500 hover:bg-blue-600",
    },
    search: {
      modalBackground: "bg-white",
      inputBackground: "bg-white",
      inputText: "text-gray-900",
      inputPlaceholder: "text-gray-500",
      inputBorder: "border-gray-300",
      closeButton: "text-gray-500",
      closeButtonHover: "hover:bg-gray-100 hover:text-gray-700",
      resultHover: "hover:bg-gray-50",
      resultText: "text-gray-900",
      resultSubtext: "text-gray-600",
    },
    internationalization: {
      modalBackground: "bg-white",
      itemBackground: "hover:bg-blue-100",
      itemText: "",
      selectedText: "font-semibold text-blue-600",
      selectedBackground: "bg-blue-200",
    },
  },
  dark: {
    main: {
      background: "bg-gradient-to-br from-gray-900 to-gray-800",
      text: "text-purple-300 text-5xl font-bold",
    },
    button: {
      background: "bg-blue-600 hover:bg-blue-700",
      text: "text-white hover:text-white/90",
      icon: "text-white hover:text-white/90",
      navIcon: "text-white hover:text-white/90",
    },
    card: {
      background: "bg-gray-800 rounded-lg shadow-lg",
      text: "text-gray-200",
      footer: "text-purple-400",
      decorationFooter: "bg-black/10",
      decorationText: "bg-blue-600 hover:bg-blue-700",
    },
    search: {
      modalBackground: "bg-gray-900",
      inputBackground: "bg-gray-900",
      inputText: "text-white",
      inputPlaceholder: "text-gray-400",
      inputBorder: "border-gray-700",
      closeButton: "text-gray-400",
      closeButtonHover: "hover:bg-gray-700 hover:text-gray-200",
      resultHover: "hover:bg-gray-700/50",
      resultText: "text-white",
      resultSubtext: "text-gray-400",
    },
    internationalization: {
      modalBackground: "bg-gray-900",
      itemBackground: "hover:bg-blue-700",
      itemText: "text-purple-300",
      selectedText: "font-semibold text-purple-300",
      selectedBackground: "bg-blue-800",
    },
  },
};
