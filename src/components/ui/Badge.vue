<script setup lang="ts">
import { computed } from 'vue'
import type BadgeSchema from '../../types/badge-schema'
import { usePhraseStore } from '../../stores/phrases'

const props = defineProps<{
  badge: BadgeSchema
}>()

const store = usePhraseStore()

const badgeClasses = computed(() => [
  'inline-flex items-center gap-1',
  'px-2.5 py-1 md:px-3 md:py-1.5',
  'rounded-full',
  'text-xs font-medium',
  'transform transition-all duration-300',
  'backdrop-blur-sm',
  'ring-1 ring-inset ring-white/10',
  'group-hover:scale-105',
  'group-hover:shadow-xl',
  store.isDark ? props.badge.backgroundDark : props.badge.background,
  store.isDark ? props.badge.textDark : props.badge.text,
])
</script>

<template>
  <div
      :class="badgeClasses"
      class="animate-badge-pop"
  >
    <component
        v-if="badge.icon"
        :is="badge.icon"
        :size="14"
        weight="fill"
        class="group-hover:animate-pulse"
    />
    <span>{{ store.getCurrentLanguagePhrase('', badge.name) }}</span>
  </div>
</template>