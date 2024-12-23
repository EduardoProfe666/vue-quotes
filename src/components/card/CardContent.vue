<script setup lang="ts">
import PhraseContent from '../phrase/PhraseContent.vue'
import PhraseImage from '../phrase/PhraseImage.vue'
import Badge from '../ui/Badge.vue'
import { usePhraseStore } from '../../stores/phrases'
import { badges } from '../../data/data'

const store = usePhraseStore()

defineProps<{
  cardRef: HTMLElement | null
  isDark: boolean
}>()

const getBadge = (badgeId: string | undefined) => {
  if (!badgeId) return null
  return badges.find(badge => badge.id === badgeId)
}
</script>

<template>
  <div class="relative flex flex-col md:flex-row items-center p-8 md:p-12 gap-8">
    <!-- Badge Container -->
    <div
        v-if="store.currentPhrase?.badgeId"
        class="absolute top-3 right-3 md:top-4 md:right-4 z-10"
    >
      <Badge
          v-if="getBadge(store.currentPhrase.badgeId)"
          :badge="getBadge(store.currentPhrase.badgeId)!"
      />
    </div>

    <PhraseContent
        :phrase="store.currentPhrase"
        :is-dark="isDark"
    />
    <PhraseImage
        :image-url="store.currentPhraseImage"
        :is-dark="isDark"
    />
  </div>
</template>