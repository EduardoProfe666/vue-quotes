<script setup lang="ts">
import { computed } from 'vue'
import type { PhraseSchema } from '../../types/phrase-schema'
import { usePhraseStore } from '../../stores/phrases'
import Badge from '../ui/Badge.vue'
import { badges, themes } from '../../data/data'

const props = defineProps<{
  phrase: PhraseSchema
}>()

const emit = defineEmits<{
  select: []
}>()

const store = usePhraseStore()

const badge = computed(() => {
  if (!props.phrase.badgeId) return null
  return badges.find(b => b.id === props.phrase.badgeId)
})

const handleSelect = () => {
  const index = store.phrases.findIndex(p => p.message === props.phrase.message)
  if (index !== -1) {
    store.setCurrentIndex(index)
    emit('select')
  }
}

const themeClasses = computed(() => store.isDark ? themes.dark.search : themes.light.search)
</script>

<template>
  <button
      class="w-full text-left p-4 rounded-lg transition-all duration-200 group"
      :class="themeClasses.resultHover"
      @click="handleSelect"
  >
    <div class="flex items-start justify-between gap-4">
      <div class="flex-1">
        <p
            class="text-lg font-display leading-relaxed mb-2"
            :class="themeClasses.resultText"
        >
          "{{ phrase.message }}"
        </p>
        <p
            class="text-sm"
            :class="themeClasses.resultSubtext"
        >
          {{ phrase.footer }}
        </p>
      </div>

      <Badge v-if="badge" :badge="badge" />
    </div>
  </button>
</template>