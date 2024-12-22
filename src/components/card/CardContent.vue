<script setup lang="ts">
import PhraseContent from '../phrase/PhraseContent.vue'
import PhraseImage from '../phrase/PhraseImage.vue'
import { usePhraseStore } from '../../stores/phrases'

const store = usePhraseStore()

defineProps<{
  cardRef: HTMLElement | null
  isDark: boolean
}>()
</script>

<template>
  <div class="flex flex-col md:flex-row items-center p-8 md:p-12 gap-8">
    <PhraseContent
        :phrase="store.currentPhrase"
        :is-dark="isDark"
    />
    <PhraseImage
        :image-url="store.currentPhraseImage"
        :is-dark="isDark"
    />
  </div>
</template>