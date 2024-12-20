<script setup lang="ts">
import { usePhraseStore } from '../stores/phrases'
import {
  PhArrowLeft,
  PhArrowRight,
  PhDownload,
} from '@phosphor-icons/vue'
import Button from './ui/Button.vue'

const store = usePhraseStore()

defineProps<{
  isExporting: boolean
}>()
</script>

<template>
  <div class="flex justify-center items-center gap-4 p-4">
    <Button
        @click="store.previousPhrase"
        class="flex flex-col items-center"
        :disabled="store.isLoading"
    >
      <PhArrowLeft
          :size="24"
          weight="bold"
          class="transition-transform duration-300 group-hover:-translate-x-1"
      />
      <span class="hidden md:inline">Anterior</span>
    </Button>

    <Button
        @click="$emit('export')"
        :disabled="isExporting || store.isLoading"
        class="flex flex-col items-center"
    >
      <PhDownload
          :size="24"
          weight="bold"
          class="transition-transform duration-300 group-hover:scale-110"
      />
      <span class="hidden md:inline">{{ isExporting ? 'Exportando...' : 'Exportar' }}</span>
    </Button>

    <Button
        @click="store.nextPhrase"
        class="flex flex-col items-center"
        :disabled="store.isLoading"
    >
      <PhArrowRight
          :size="24"
          weight="bold"
          class="transition-transform duration-300 group-hover:translate-x-1"
      />
      <span class="hidden md:inline">Siguiente</span>
    </Button>
  </div>
</template>

