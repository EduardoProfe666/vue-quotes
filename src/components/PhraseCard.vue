<script setup lang="ts">
import {ref} from 'vue'
import {usePhraseStore} from '../stores/phrases'
import {toPng} from 'html-to-image'
import {downloadImage} from '../utils/image'
import NavigationButtons from './NavigationButtons.vue'
import PhraseContent from './phrase/PhraseContent.vue'
import PhraseImage from './phrase/PhraseImage.vue'
import Button from './ui/Button.vue'
import {
  PhSun,
  PhMoon,
  PhGithubLogo
} from '@phosphor-icons/vue'
import {toast} from 'vue-sonner'
import {buttons, themes} from "../data/data.ts";

const store = usePhraseStore()
const cardRef = ref<HTMLElement | null>(null)
const isExporting = ref(false)

const exportAsPng = async () => {
  if (!cardRef.value) return
  isExporting.value = true

  try {
    const img = cardRef.value.querySelector('img')
    if (img) {
      await new Promise((resolve) => {
        img.onload = resolve
        if (img.complete) resolve(null)
      })
    }

    const dataUrl = await toPng(cardRef.value, {
      quality: 0.95,
      cacheBust: true
    })

    downloadImage(dataUrl, 'phrase.png')
    toast.success(buttons.exportSuccessNotification || 'Export Phrase Successfully')
  } catch (error) {
    console.error('Error exporting image:', error)
    toast.error(buttons.exportFailedNotification ||  'Export Failed. Try later')
  } finally {
    isExporting.value = false
  }
}
</script>

<template>
  <div class="w-full max-w-5xl mx-auto p-4">
    <div
        ref="cardRef"
        class="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 animate-fade-in backdrop-blur-sm group"
        :class="[
        store.isDark ? themes.dark.card.background : themes.light.card.background,
        store.isDark ? themes.dark.card.text : themes.light.card.text,
      ]"
    >
      <div class="flex flex-col md:flex-row items-center p-8 md:p-12 gap-8">
        <PhraseContent
            :phrase="store.currentPhrase"
            :is-dark="store.isDark"
        />
        <PhraseImage
            :image-url="store.currentPhraseImage"
            :is-dark="store.isDark"
        />
      </div>
    </div>

    <div class="mt-12 space-y-6">
      <NavigationButtons
          :is-exporting="isExporting"
          @export="exportAsPng"
      />

      <a :href="buttons.socialButtonLink || 'https://eduardoprofe666.github.io'" target="_blank" rel="noopener noreferrer">
        <Button v-if="buttons.socialButtonEnabled"
            variant="icon"
            class="fixed bottom-20 right-4 shadow-lg"
            :title="buttons.socialButtonText || 'My Portfolio'"
        >
          <component :is="buttons.socialButtonIcon || PhGithubLogo"
                     :size="24"
                     weight="bold"
                     :class="store.isDark ? themes.dark.button.icon : themes.light.button.icon"
          />
        </Button>
      </a>

      <Button
          variant="icon"
          @click="store.toggleDarkMode"
          class="fixed bottom-6 right-4 shadow-lg"
          :title="store.isDark ? (buttons.darkModeTooltipText || 'Change to Light Mode') : (buttons.lightModeTooltipText || 'Change to Dark Mode')"
      >
        <component
            :is="store.isDark ? (buttons.darkModeIcon || PhSun) : (buttons.lightModeIcon || PhMoon)"
            :size="24"
            weight="bold"
            :class="store.isDark ? themes.dark.button.icon : themes.light.button.icon"
        />
      </Button>
    </div>
  </div>

  <Toaster position="top-center"/>
</template>
