import {defineStore} from 'pinia'
import type {PhraseSchema} from '../types/phrase-schema.ts'
import {generals, phrases} from "../data/data.ts";

export const usePhraseStore = defineStore('phrases', {
    state: () => ({
        phrases: [] as PhraseSchema[],
        currentIndex: 0,
        isDark: false,
        isLoading: false,
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
        }
    }
})
