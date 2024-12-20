import { defineStore } from 'pinia'
import axios from 'axios'
import type { Phrase } from '../types/phrase'

const API_URL = 'https://choco-frases-api.onrender.com/v1/phrases'

export const usePhraseStore = defineStore('phrases', {
  state: () => ({
    phrases: [] as Phrase[],
    currentIndex: 0,
    isDark: false,
    isLoading: false,
    error: null as string | null
  }),

  getters: {
    currentPhrase: (state) => state.phrases[state.currentIndex],
    totalPhrases: (state) => state.phrases.length,
  },

  actions: {
    async fetchPhrases() {
      this.isLoading = true
      this.error = null

      try {
        const response = await axios.get<Phrase[]>(API_URL)
        this.phrases = this.shuffleArray(response.data)
        this.currentIndex = 0;
      } catch (error) {
        this.error = 'Failed to fetch phrases. Please try again later.'
        console.error('Error fetching phrases:', error)
      } finally {
        this.isLoading = false
      }
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

    shuffleArray(array: Phrase[]): Phrase[] {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  }
})
