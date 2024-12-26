<script setup lang="ts">
import { ref, computed } from 'vue'
import { usePhraseStore } from '../stores/phrases'
import CardNavigation from './card/CardNavigation.vue'
import CardContent from './card/CardContent.vue'
import ActionButtons from './card/ActionButtons.vue'
import { useCardAnimation } from '../composables/useCardAnimation'
import { themes } from '../data/data'
import { Toaster } from 'vue-sonner'

const store = usePhraseStore()
const cardRef = ref<HTMLElement | null>(null)

const {
  isAnimating,
  slideDirection,
  navigateNext,
  navigatePrevious
} = useCardAnimation(store)

const cardClasses = computed(() => [
  'relative overflow-hidden rounded-2xl shadow-xl backdrop-blur-sm group',
  'card-hover',
  store.isDark ? themes.dark.card.background : themes.light.card.background,
  store.isDark ? themes.dark.card.text : themes.light.card.text,
  {
    'slide-left': slideDirection.value === 'left',
    'slide-right': slideDirection.value === 'right'
  }
])
</script>

<template>
  <div class="w-full max-w-5xl mx-auto p-4">
    <div
        ref="cardRef"
        :class="cardClasses"
    >
      <CardNavigation
          :is-dark="store.isDark"
          :on-previous="navigatePrevious"
          :on-next="navigateNext"
          :is-animating="isAnimating"
      />
      <CardContent
          :card-ref="cardRef"
          :is-dark="store.isDark"
      />
    </div>

    <ActionButtons :card-ref="cardRef" />
  </div>

  <Toaster position="top-center"/>
</template>

<style>
@import '../styles/animations.css';
</style>