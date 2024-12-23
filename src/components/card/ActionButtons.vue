<script setup lang="ts">
import Button from '../ui/Button.vue'
import SearchButton from '../search/SearchButton.vue'
import DockContainer from '../dock/DockContainer.vue'
import {usePhraseStore} from '../../stores/phrases'
import {useExport} from '../../composables/useExport'
import {
  PhSun,
  PhMoon,
  PhGithubLogo,
  PhDownload, PhGlobe,
} from '@phosphor-icons/vue'
import {buttons, generals, themes} from "../../data/data"
import {ref} from "vue";
import LanguageModal from "../language/LanguageModal.vue";

const store = usePhraseStore()
const {isExporting, exportAsPng} = useExport()
const isLanguageModalOpen = ref(false)

defineProps<{
  cardRef: HTMLElement | null
}>()
</script>

<template>
  <DockContainer>
    <a
        :href="buttons.socialButtonLink || 'https://eduardoprofe666.github.io'"
        target="_blank"
        rel="noopener noreferrer"
    >
      <Button
          variant="dock"
          :title="store.getCurrentLanguagePhrase('My Portfolio', buttons.socialButtonText)"
      >
        <component
            :is="buttons.socialButtonIcon || PhGithubLogo"
            :size="24"
            weight="bold"
            :class="store.isDark ? themes.dark.button.icon : themes.light.button.icon"
        />
      </Button>
    </a>
    <SearchButton/>
    <Button
        variant="dock"
        :title="isExporting ? store.getCurrentLanguagePhrase('Exporting...', buttons.exportActiveText) : store.getCurrentLanguagePhrase('Export Image', buttons.exportText)"
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
        v-if="generals.internationalizationEnabled"
        variant="dock"
        :title="store.getCurrentLanguagePhrase('Select Language', buttons.languageButtonText)"
        @click="isLanguageModalOpen = true"
    >
      <PhGlobe
          :size="24"
          weight="bold"
          :class="store.isDark ? themes.dark.button.icon : themes.light.button.icon"
      />
    </Button>
    <Teleport to="body">
      <LanguageModal v-if="isLanguageModalOpen" @close="isLanguageModalOpen = false" />
    </Teleport>
    <Button
        variant="dock"
        @click="store.toggleDarkMode"
        :title="store.isDark ? (store.getCurrentLanguagePhrase('Change to Light Mode', buttons.darkModeTooltipText)) : (store.getCurrentLanguagePhrase('Change to Dark Mode', buttons.lightModeTooltipText))"
    >
      <component
          :is="store.isDark ? (buttons.darkModeIcon || PhSun) : (buttons.lightModeIcon || PhMoon)"
          :size="24"
          weight="bold"
          :class="store.isDark ? themes.dark.button.icon : themes.light.button.icon"
      />
    </Button>
  </DockContainer>
</template>