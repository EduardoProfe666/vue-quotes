<script setup lang="ts">
import Button from '../ui/Button.vue'
import SearchButton from '../search/SearchButton.vue'
import {usePhraseStore} from '../../stores/phrases'
import {useExport} from '../../composables/useExport'
import {
  PhSun,
  PhMoon,
  PhGithubLogo,
  PhDownload,
} from '@phosphor-icons/vue'
import {buttons, themes} from "../../data/data"

const store = usePhraseStore()
const {isExporting, exportAsPng} = useExport()

defineProps<{
  cardRef: HTMLElement | null
}>()
</script>

<template>
  <div class="fixed bottom-6 right-4 flex flex-col gap-4">
    <a :href="buttons.socialButtonLink || 'https://eduardoprofe666.github.io'" target="_blank"
       rel="noopener noreferrer">
      <Button
          v-if="buttons.socialButtonEnabled"
          variant="icon"
          class="shadow-lg"
          :title="buttons.socialButtonText || 'My Portfolio'"
      >
        <component :is="buttons.socialButtonIcon || PhGithubLogo"
                   :size="24"
                   weight="bold"
                   :class="store.isDark ? themes.dark.button.icon : themes.light.button.icon"
        />
      </Button>
    </a>

    <SearchButton />

    <Button
        variant="icon"
        class="shadow-lg"
        :title="isExporting ? 'Exporting...' : 'Export Image'"
        :disabled="isExporting"
        @click="exportAsPng(cardRef)"
    >
      <PhDownload
          :size="24"
          weight="bold"
          :class="store.isDark ? themes.dark.button.icon : themes.light.button.icon"
      />
    </Button>

    <Button
        variant="icon"
        @click="store.toggleDarkMode"
        class="shadow-lg"
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
</template>