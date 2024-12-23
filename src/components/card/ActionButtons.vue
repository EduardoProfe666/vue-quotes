<script setup lang="ts">
import Button from '../ui/Button.vue'
import SearchButton from '../search/SearchButton.vue'
import DockContainer from '../dock/DockContainer.vue'
import DockItem from '../dock/DockItem.vue'
import { usePhraseStore } from '../../stores/phrases'
import { useExport } from '../../composables/useExport'
import {
  PhSun,
  PhMoon,
  PhGithubLogo,
  PhDownload,
} from '@phosphor-icons/vue'
import { buttons, themes } from "../../data/data"

const store = usePhraseStore()
const { isExporting, exportAsPng } = useExport()

defineProps<{
  cardRef: HTMLElement | null
}>()
</script>

<template>
  <DockContainer v-slot="{ scales }">
    <DockItem
        v-if="buttons.socialButtonEnabled"
        :scale="scales[0]"
    >
      <a
          :href="buttons.socialButtonLink || 'https://eduardoprofe666.github.io'"
          target="_blank"
          rel="noopener noreferrer"
      >
        <Button
            variant="dock"
            :title="buttons.socialButtonText || 'My Portfolio'"
        >
          <component
              :is="buttons.socialButtonIcon || PhGithubLogo"
              :size="24"
              weight="bold"
              :class="store.isDark ? themes.dark.button.icon : themes.light.button.icon"
          />
        </Button>
      </a>
    </DockItem>

    <DockItem :scale="scales[1]">
      <SearchButton />
    </DockItem>

    <DockItem :scale="scales[2]">
      <Button
          variant="dock"
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
    </DockItem>

    <DockItem :scale="scales[3]">
      <Button
          variant="dock"
          @click="store.toggleDarkMode"
          :title="store.isDark ? (buttons.darkModeTooltipText || 'Change to Light Mode') : (buttons.lightModeTooltipText || 'Change to Dark Mode')"
      >
        <component
            :is="store.isDark ? (buttons.darkModeIcon || PhSun) : (buttons.lightModeIcon || PhMoon)"
            :size="24"
            weight="bold"
            :class="store.isDark ? themes.dark.button.icon : themes.light.button.icon"
        />
      </Button>
    </DockItem>
  </DockContainer>
</template>