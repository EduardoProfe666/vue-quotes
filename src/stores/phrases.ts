import {defineStore} from 'pinia'
import type {PhraseSchema} from '../types/phrase-schema'
import {generals, phrases, badges, languages} from "../data/data"
import InternationalizationSchema from "../types/internationalization-schema.ts";

export const usePhraseStore = defineStore('phrases', {
    state: () => ({
        phrases: [] as PhraseSchema[],
        currentIndex: 0,
        isDark: false,
        isLoading: false,
        currentLanguage: languages[0]?.id || 'en',
    }),

    getters: {
        currentPhrase: (state) => state.phrases[state.currentIndex],
        currentPhraseImage: (state) => state.phrases[state.currentIndex]?.image || generals?.authorImage || '/author.png',
        totalPhrases: (state) => state.phrases.length,
    },

    actions: {
        async fetchPhrases() {
            this.isLoading = true;

            if (generals.randomPhrases)
                this.phrases = this.shuffleArray(phrases);
            else
                this.phrases = phrases;

            this.isLoading = false;
        },

        setCurrentIndex(index: number) {
            this.currentIndex = index;
        },

        getBadgeName(badgeId: string) {
            return this.getCurrentLanguagePhrase('', badges.find(b => b.id === badgeId)?.name);
        },

        nextPhrase() {
            this.currentIndex = (this.currentIndex + 1) % this.phrases.length;
        },

        previousPhrase() {
            this.currentIndex = (this.currentIndex - 1 + this.phrases.length) % this.phrases.length;
        },

        toggleDarkMode() {
            this.isDark = !this.isDark
            document.documentElement.classList.toggle('dark')
        },

        shuffleArray(array: PhraseSchema[]): PhraseSchema[] {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        },

        getCurrentLanguage() {
            return this.currentLanguage;
        },

        setCurrentLanguage(languageId: string) {
            if (languages.find(x => x.id === languageId)) {
                this.currentLanguage = languageId;
            }
        },

        getCurrentLanguagePhrase(fallbackValue: string, element?: string | InternationalizationSchema[]) {
            if (!element) {
                return fallbackValue;
            }

            if (typeof element === 'string')
                return element;

            const value = element.find(x => x.languageId === this.currentLanguage);
            return value ? value.message : fallbackValue;

        }
    }
})