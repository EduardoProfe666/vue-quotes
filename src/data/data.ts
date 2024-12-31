import { PhraseSchema } from "../types/phrase-schema.ts";
import { GeneralsSchema } from "../types/generals-schema.ts";
import { ButtonsSchema } from "../types/buttons-schema.ts";
import { ThemeSchema } from "../types/theme-schema.ts";
import BadgeSchema from "../types/badge-schema.ts";
import { PhMeteor } from "@phosphor-icons/vue";
import { SearchSchema } from "../types/search-schema.ts";
import LanguageSchema from "../types/language-schema.ts";

// ---------------------------- 🎯 GENERALS 🎯 ---------------------------- //
export const generals: GeneralsSchema = {
    title: "🤨 Frases de El Ambiental",
    randomPhrases: true,
    internationalizationEnabled: false,
    author: "El Ambiental",
    authorImage: "/author.png"
};

// ---------------------------- 🏷️ BADGES 🏷️ ---------------------------- //
export const badges: BadgeSchema[] = [
    {
        id: "amb",
        name: "Mucho Ambiente",
        icon: PhMeteor,
        background:
            "bg-red-100/90 hover:bg-red-200/95 transition duration-300 ease-in-out",
        backgroundDark:
            "bg-red-500/20 hover:bg-red-500/30 transition duration-300 ease-in-out",
        text: "text-red-950",
        textDark: "text-red-300",
    }
];

// ---------------------------- 💭 PHRASES 💭 ---------------------------- //
export const phrases: PhraseSchema[] = [
    {
        message: "El que se enamora pierde... Ahora me siento perdido y nunca me he enamorado.",
        badgeId: "amb",
    },
    {
        message: "Con la boca llena no se habla, pero peor es andar por la calle con la cabeza vacía.",
        badgeId: "amb",
    },
    {
        message: "Malo es no estar en la boca de nadie, yo siempre dejando huellas.",
        badgeId: "amb",
    },
    {
        message: "Padre nuestro que estás en los cielos, santificado sea tu nombre; bendíceme a mí, que también soy hombre y si se va a formar, que se forme.",
        badgeId: "amb",
    },
    {
        message: "Trabajo para la mayoría, no para unos pocos que no saben reconocer lo bueno.",
        badgeId: "amb",
    },
    {
        message: "A veces perdiendo se gana, y yo quiero que pierdas para que ganes esa experiencia.",
        badgeId: "amb",
    },
    {
        message: "No necesito consejos de personas que no han construido nada. Todo lo que he logrado es resultado de mis decisiones y mi forma de ser. Mi cuenta bancaria es la única que refleja mis resultados, no las opiniones ajenas.",
        badgeId: "amb",
    },
    {
        message: "Yo voy a ser así hasta el día en que me muera, y al que le moleste, que se muera primero.",
        badgeId: "amb",
    },
    {
        message: "Por mucha carne que tu tenga, yo te voy a llegar al hueso.",
        badgeId: "amb",
    },
    {
        message: "Te veo más lejos del bollo que del Sol.",
        badgeId: "amb",
    },
    {
        message: "La vida es loca, cualquiera puede ser tu padrastro.",
        badgeId: "amb",
    },
    {
        message: "Antes no habían teléfonos inteligentes; ahora los hay con dueños brutos.",
        badgeId: "amb",
    },
    {
        message: "Buenas noches hablo con Elena? El enano...",
        badgeId: "amb",
    },
    {
        message: "La bandera china es china, o es original?",
        badgeId: "amb",
    },
    {
        message: "No seas tan suave pa' que te expriman, ni tan blando pa' que te rompan.",
        badgeId: "amb",
    },
    {
        message: "Yo me llevo muy bien con todos, pero todos ustedes finjen llevarse mal conmigo; vira la lancha pa' atrás que ya no quiero la merca.",
        badgeId: "amb",
    },
    {
        message: "El dinero mueve el mundo querida, tú me das el dinero y yo te llevo al que lo hace.",
        badgeId: "amb",
    },
    {
        message: "La gente cuando me ven se vuelven to' locos, aquí analizando lo que no se puede analizar.",
        badgeId: "amb",
    },
    {
        message: "Mi cuerpo me pide tatuajes, y mi tatuador me pide dinero.",
        badgeId: "amb",
    },
    {
        message: "Oh mar!, Oh mar!, devuélveme mi piedra.",
        badgeId: "amb",
    },
    {
        message: "Te veo cogiéndote pa' eso últimamente: cada vez que tú te molestas, cambias la foto de perfil, asere, cuál es tu drama?!",
        badgeId: "amb",
    },
    {
        message: "Mi hermano yo la cogí, y le dije: Por mujeres como tú, hay hombres como yo!",
        badgeId: "amb",
    },
    {
        message: "Las candelas son candelas, y el candelero soy yo!",
        badgeId: "amb",
    },
    {
        message: "No entiendo las noticias, todo el mundo pidiendo justicia, cuando justos somos pocos.",
        badgeId: "amb",
    },
    {
        message: "Tu sábes lo que pasa? Que estamos viviendo de las apariencias, y nosotros no tenemos que aparentar, para poder vivir.",
        badgeId: "amb",
    },
    {
        message: "Te ví hablando de mí el otro día... Sabe'? Yo estaba cerquita de ti y lo escuché todo... Tan aburrido estás de vivir tu vida, que ahora quieres vivir la mía?",
        badgeId: "amb",
    },
    {
        message: "Síguete durmiendo de ese lado que se te va a dormir el brazo.",
        badgeId: "amb",
    },
    {
        message: "Tú sabes cuál es el problema tuyo? Que tu eres víctima de mis éxitos, y vividor de tus fracasos. Q bolá asere!",
        badgeId: "amb",
    },
    {
        message: "Acuérdate que Dios, no elige a los preparados, prepara a los elegidos!",
        badgeId: "amb",
    },
    {
        message: "Mami, escúchame! He hecho tantas cosas malas en mi vida con tal de buscame 2 o 3 pesos, que hoy en día estoy aquí al lado de un latón, porque me siento una basura, estoy pensando en tirarme dentro.",
        badgeId: "amb",
    },
    {
        message: "El amor es como una sopa, y yo soy un tenedor.",
        badgeId: "amb",
    },
    {
        message: "Señora! Tu sabes por qué el mar es salado? Porque te llevaste todo el dulce.",
        badgeId: "amb",
    },
    {
        message: "Q bolá asere!! Le estás tirando al 1 pa' darle al 2, pero lo que tú no sabes es que la vida se vive así, porque el cuerpo se come asado.",
        badgeId: "amb",
    },
    {
        message: "Estaba pensando que, con los políticos que tenemos en Cuba, es un honor ser un bandido",
        badgeId: "amb",
    },
    {
        message: "La experiencia es como el peine que nos dan cuando ya estamos calvos, a mí me lo dieran teniendo pelo.",
        badgeId: "amb",
    },
    {
        message: "Yo soy de los tipos que me hago el muerto, para ver el entierro que me hacen.",
        badgeId: "amb",
    },
    {
        message: "Estábamos adentro del cine, y digo: Yo soy de los chamaquitos que cuando le entran ganas de orinar, hay que ponerle pausa a la película. La pausa se la puso el director del cine.",
        badgeId: "amb",
    },
    {
        message: "Cuando mi vida peligre, la de cualquiera me pertenece. Hablamo' el martes",
        badgeId: "amb",
    },
    {
        message: "No importa en presencia de quien estemos, si sabemos quienes somos.",
        badgeId: "amb",
    },
    {
        message: "Te ha dado por vivir la parte ancha de tu vida estrecha.",
        badgeId: "amb",
    },
    {
        message: "Si en la confianza está el peligro, y yo soy el peligro, cuál es tu confianza?",
        badgeId: "amb",
    },
    {
        message: "Un día van a llover clavos y solo estarán mis enemigos en la calle, como por ejemplo, tú.",
        badgeId: "amb",
    },
    {
        message: "Yo soy el barco que se le perdió al mar.",
        badgeId: "amb",
    },
    {
        message: "Cuando tu ibas con el pan, ya yo venía con la harina, es más, el pan se me quemó.",
        badgeId: "amb",
    },
    {
        message: "Te voy a meter lo que el viento se llevó, y lo que trajo cuando vino.",
        badgeId: "amb",
    },
    {
        message: "Que no se te olvide, que yo estoy viviendo en tus tiempos, pero tú no viviste en los míos, son 2 tiempos contra 1.",
        badgeId: "amb",
    },
    {
        message: "No te hagas más la de las tetas, que yo tengo una perra que tiene 8! Sabiendo que yo soy un tipo difícil.",
        badgeId: "amb",
    },
    {
        message: "Estoy loco por que me ingresen: para que me den jugo y pollito hervido!",
        badgeId: "amb",
    },
    {
        message: "Tú para mi siempre has sido como una flor, pero yo siempre he sido un jardinero irresponsable.",
        badgeId: "amb",
    },
    {
        message: "Yo soy el barco que se le perdió al mar, cobio.",
        badgeId: "amb",
    },
    {
        message: "Si Dios nos creó, por qué nos hizo ateos?",
        badgeId: "amb",
    },
    {
        message: "Si la vida fuera un pañuelo, tú fueras tremendo moco!",
        badgeId: "amb",
    },
    {
        message: "Yo no regalo flores, eso no es de gantel, tú lo sabes muy  bien.",
        badgeId: "amb",
    },
    {
        message: "Yo para ti he sido como una madre, te he dado hasta de mamar.",
        badgeId: "amb",
    },
    {
        message: "Jugaste como nunca, y perdiste como siempre.",
        badgeId: "amb",
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
            background: 'bg-gradient-to-br from-emerald-100 to-teal-400',
            text: 'text-emerald-800 text-5xl font-bold',
        },
        button: {
            background: 'bg-teal-500 hover:bg-teal-600',
            text: 'text-white hover:text-white/90',
            icon: 'text-white hover:text-white/90',
            navIcon: 'text-emerald-800 hover:text-emerald-800/90',
        },
        card: {
            background: 'bg-white shadow-lg rounded-lg',
            text: 'text-emerald-800',
            footer: 'text-teal-600',
            decorationFooter: 'bg-emerald-200',
            decorationText: 'bg-teal-500 hover:bg-teal-600',
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
            itemBackground: 'hover:bg-teal-100',
            itemText: '',
            selectedText: 'font-semibold text-teal-600',
            selectedBackground: 'bg-teal-200',
        }
    },
    dark: {
        main: {
            background: 'bg-gradient-to-br from-teal-900 to-teal-800',
            text: 'text-teal-300 text-5xl font-bold',
        },
        button: {
            background: 'bg-teal-500 hover:bg-teal-600',
            text: 'text-white hover:text-white/90',
            icon: 'text-white hover:text-white/90',
            navIcon: 'text-white hover:text-white/90',
        },
        card: {
            background: 'bg-teal-800/90 rounded-lg shadow-lg',
            text: 'text-gray-200',
            footer: 'text-teal-400',
            decorationFooter: 'bg-white/10',
            decorationText: 'bg-teal-500 hover:bg-teal-600',
        },
        search: {
            modalBackground: 'bg-teal-800',
            inputBackground: 'bg-teal-800',
            inputText: 'text-white',
            inputPlaceholder: 'text-gray-400',
            inputBorder: 'border-gray-700',
            closeButton: 'text-gray-400',
            closeButtonHover: 'hover:bg-gray-700 hover:text-gray-200',
            resultHover: 'hover:bg-teal-700/50',
            resultText: 'text-white',
            resultSubtext: 'text-gray-400'
        },
        internationalization: {
            modalBackground: 'bg-teal-800',
            itemBackground: 'hover:bg-teal-700',
            itemText: 'text-teal-300',
            selectedText: 'font-semibold text-teal-300',
            selectedBackground: 'bg-teal-800',
        }
    }
};


