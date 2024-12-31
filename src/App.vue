<script setup lang="ts">
import {onMounted} from 'vue'
import { usePhraseStore } from './stores/phrases'
import PhraseCard from './components/PhraseCard.vue'
import {generals, themes} from "./data/data.ts";

const store = usePhraseStore()

onMounted(async () => {
  await store.fetchPhrases()
})

</script>

<template>
  <main 
    class="min-h-screen transition-colors duration-500"
    :class="store.isDark ? themes.dark.main.background : themes.light.main.background"
  >
    <div class="container mx-auto py-12">
      <h1
        class="text-center mb-12 animate-slide-down"
        :class="store.isDark ? themes.dark.main.text : themes.light.main.text"
      >
        {{ store.getCurrentLanguagePhrase('Quotes', generals.title) }}
      </h1>
      <PhraseCard />
    </div>
  </main>
</template>