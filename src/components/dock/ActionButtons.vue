<script setup lang="ts">
import Button from '../ui/Button.vue'
import SearchButton from '../search/SearchButton.vue'
import DockContainer from './DockContainer.vue'
import {usePhraseStore} from '../../stores/phrases.ts'
import {useExport} from '../../composables/useExport.ts'
import {
  PhSun,
  PhMoon,
  PhGithubLogo,
  PhDownload, PhGlobe,
} from '@phosphor-icons/vue'
import {buttons, generals, search, themes} from "../../data/data.ts"
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
    <Button
        class="hover:scale-125"
        v-if="generals.internationalizationEnabled"
        variant="dock"
        :title="store.getCurrentLanguagePhrase('Select Language', buttons.languageText)"
        @click="isLanguageModalOpen = true"
    >
      <component
          :is="buttons.languageIcon || PhGlobe"
          :size="24"
          weight="bold"
          :class="store.isDark ? themes.dark.button.icon : themes.light.button.icon"
      />
    </Button>
    <Teleport to="body">
      <LanguageModal v-if="isLanguageModalOpen" @close="isLanguageModalOpen = false" />
    </Teleport>
    <SearchButton v-if="search.enabled" class="hover:scale-125"/>
    <Button
        class="hover:scale-125"
        variant="dock"
        :title="isExporting ? store.getCurrentLanguagePhrase('Exporting...', buttons.exportActiveText) : store.getCurrentLanguagePhrase('Export Image', buttons.exportText)"
        :disabled="isExporting"
        @click="exportAsPng(cardRef)"
    >
      <component
          :is="buttons.exportIcon || PhDownload"
          :size="24"
          weight="bold"
          :class="store.isDark ? themes.dark.button.icon : themes.light.button.icon"
      />
    </Button>
    <Button
        class="hover:scale-125"
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
    <a
        :href="buttons.socialLink || 'https://eduardoprofe666.github.io'"
        target="_blank"
        rel="noopener noreferrer"
    >
      <Button
          v-if="buttons.socialEnabled"
          class="hover:scale-125"
          variant="dock"
          :title="store.getCurrentLanguagePhrase('My Portfolio', buttons.socialText)"
      >
        <component
            :is="buttons.socialIcon || PhGithubLogo"
            :size="24"
            weight="bold"
            :class="store.isDark ? themes.dark.button.icon : themes.light.button.icon"
        />
      </Button>
    </a>
  </DockContainer>
</template>