<script setup lang="ts">
import { ref, computed } from 'vue'
import { usePhraseStore } from '../stores/phrases'
import CardNavigation from './card/CardNavigation.vue'
import CardContent from './card/CardContent.vue'
import ActionButtons from './card/ActionButtons.vue'
import { useSwipe } from '../composables/useSwipe'
import { useCardAnimation } from '../composables/useCardAnimation'
import { themes } from '../data/data'
import { Toaster } from 'vue-sonner'

const store = usePhraseStore()
const cardRef = ref<HTMLElement | null>(null)

const {
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
  isDragging,
  dragDistance,
  swipeStrength
} = useSwipe({
  onSwipeLeft: () => navigateNext(),
  onSwipeRight: () => navigatePrevious(),
  threshold: 100,
  resistance: 0.8
})

const {
  isAnimating,
  slideDirection,
  navigateNext,
  navigatePrevious
} = useCardAnimation(store)

const cardStyle = computed(() => ({
  transform: isDragging.value ? `translateX(${dragDistance.value}px)` : undefined,
  transition: isDragging.value ? 'none' : undefined
}))

const cardClasses = computed(() => [
  'relative overflow-hidden rounded-2xl shadow-xl backdrop-blur-sm group',
  'cursor-grab active:cursor-grabbing',
  'card-hover',
  isDragging.value && 'card-dragging',
  store.isDark ? themes.dark.card.background : themes.light.card.background,
  store.isDark ? themes.dark.card.text : themes.light.card.text,
  {
    'slide-left': slideDirection === 'left',
    'slide-right': slideDirection === 'right'
  }
])
</script>

<template>
  <div class="w-full max-w-5xl mx-auto p-4">
    <div
        ref="cardRef"
        :class="cardClasses"
        :style="cardStyle"
        @touchstart.passive="handleTouchStart"
        @touchmove.passive="handleTouchMove"
        @touchend="handleTouchEnd"
        @mousedown="handleTouchStart"
        @mousemove="handleTouchMove"
        @mouseup="handleTouchEnd"
        @mouseleave="handleTouchEnd"
    >
      <CardNavigation
          :is-dark="store.isDark"
          :on-previous="navigatePrevious"
          :on-next="navigateNext"
          :is-animating="isAnimating"
          :swipe-strength="swipeStrength"
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