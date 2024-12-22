<script setup lang="ts">
import { usePhraseStore } from '../stores/phrases'
import {
  PhArrowLeft,
  PhArrowRight,
  PhDownload,
} from '@phosphor-icons/vue'
import Button from './ui/Button.vue'
import {buttons} from "../data/data.ts";

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
      <component :is="buttons.previousIcon || PhArrowLeft"
                 :size="24"
                 weight="bold"
                 class="transition-transform duration-300 group-hover:-translate-x-1 text-light-button_icon dark:text-dark-button_icon hover:text-light-button_hover_icon dark:hover:text-dark-button_hover_icon"
      />
      <span class="hidden md:inline">{{ buttons.previousText || 'Previous' }}</span>
    </Button>

    <Button
        @click="$emit('export')"
        :disabled="isExporting || store.isLoading"
        class="flex flex-col items-center"
    >
      <component :is="buttons.exportIcon || PhDownload"
                 :size="24"
                 weight="bold"
                 class="transition-transform duration-300 group-hover:scale-110 text-light-button_icon dark:text-dark-button_icon hover:text-light-button_hover_icon dark:hover:text-dark-button_hover_icon"
      />
      <span class="hidden md:inline">{{ isExporting ? (buttons.exportActiveText || 'Exporting...') : (buttons.exportText || 'Export') }}</span>
    </Button>

    <Button
        @click="store.nextPhrase"
        class="flex flex-col items-center"
        :disabled="store.isLoading"
    >
      <component :is="buttons.nextIcon || PhArrowRight"
                 :size="24"
                 weight="bold"
                 class="transition-transform duration-300 group-hover:translate-x-1 text-light-button_icon dark:text-dark-button_icon hover:text-light-button_hover_icon dark:hover:text-dark-button_hover_icon"
      />
      <span class="hidden md:inline">{{ buttons.nextText || 'Next' }}</span>
    </Button>
  </div>
</template>

