<script setup lang="ts">
import {computed} from 'vue'
import {PhCaretLeft, PhCaretRight} from '@phosphor-icons/vue'
import {themes} from "../../data/data.ts";
import {usePhraseStore} from "../../stores/phrases.ts";

const props = defineProps<{
  isDark: boolean
  onPrevious: () => void
  onNext: () => void
  isAnimating: boolean
  swipeStrength?: number
}>()

const store = usePhraseStore();
const buttonClasses = computed(() => [
  'nav-button absolute top-1/2 z-20',
  'transition-all duration-300',
  'disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100',
  props.isDark ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-black'
])
</script>

<template>
  <div>
    <button
        @click="onPrevious"
        :disabled="isAnimating"
        :class="[buttonClasses, 'left-4 hover:-translate-x-1']"
    >
      <PhCaretLeft :size="32" weight="bold" :class="store.isDark ? themes.dark.button.icon : themes.light.button.icon"/>
    </button>

    <button
        @click="onNext"
        :disabled="isAnimating"
        :class="[buttonClasses, 'right-4 hover:translate-x-1']"
    >
      <PhCaretRight :size="32" weight="bold"
                    :class="store.isDark ? themes.dark.button.icon : themes.light.button.icon"/>
    </button>

    <div
        v-if="swipeStrength && swipeStrength > 0"
        class="swipe-indicator"
        :style="{ opacity: swipeStrength * 0.5 }"
    />
  </div>
</template>