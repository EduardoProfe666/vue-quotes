<script setup lang="ts">
import { onMounted } from 'vue'
import { usePhraseStore } from './stores/phrases'
import PhraseCard from './components/PhraseCard.vue'

const store = usePhraseStore()

onMounted(async () => {
  await store.fetchPhrases()
})
</script>

<template>
  <main 
    class="min-h-screen transition-colors duration-500 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800"
  >
    <div class="container mx-auto py-12">
      <h1
        class="text-5xl font-bold text-center mb-12 text-primary-900 dark:text-white animate-slide-down"
      >
        Frases Célebres
      </h1>
      <PhraseCard />
    </div>
  </main>
</template>