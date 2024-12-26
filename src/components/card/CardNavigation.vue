<script setup lang="ts">
import { computed } from 'vue'
import { PhCaretLeft, PhCaretRight } from '@phosphor-icons/vue'
import {buttons, themes} from "../../data/data"
import { usePhraseStore } from "../../stores/phrases"

const props = defineProps<{
  isDark: boolean
  onPrevious: () => void
  onNext: () => void
  isAnimating: boolean
}>()

const store = usePhraseStore()

const buttonClasses = computed(() => [
  'nav-button absolute top-1/2 z-20',
  'transition-all duration-300',
  'disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100',
  'backdrop-blur-sm rounded-full p-2',
  'shadow-lg hover:shadow-xl',
  props.isDark
      ? 'bg-white/10 hover:bg-white/20 text-white/90 hover:text-white'
      : 'bg-black/5 hover:bg-black/10 text-black/80 hover:text-black'
])
</script>

<template>
  <div>
    <button
        @click="onPrevious"
        :disabled="isAnimating"
        :class="[buttonClasses, 'left-4 hover:-translate-x-1']"
        :title="store.getCurrentLanguagePhrase('Previous quote', buttons?.previousText)"
    >
      <PhCaretLeft
          :size="28"
          weight="bold"
          :class="store.isDark ? themes.dark.button.navIcon : themes.light.button.navIcon"
      />
    </button>

    <button
        @click="onNext"
        :disabled="isAnimating"
        :class="[buttonClasses, 'right-4 hover:translate-x-1']"
        :title="store.getCurrentLanguagePhrase('Next quote', buttons?.nextText)"
    >
      <PhCaretRight
          :size="28"
          weight="bold"
          :class="store.isDark ? themes.dark.button.navIcon : themes.light.button.navIcon"
      />
    </button>
  </div>
</template>

<style scoped>
.nav-button:hover {
  transform: scale(1.15);
}

.nav-button:active {
  transform: scale(0.95);
}
</style>