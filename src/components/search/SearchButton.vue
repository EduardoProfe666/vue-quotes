<script setup lang="ts">
import { ref } from 'vue'
import { PhMagnifyingGlass } from '@phosphor-icons/vue'
import SearchModal from './SearchModal.vue'
import Button from '../ui/Button.vue'
import { usePhraseStore } from '../../stores/phrases'
import { themes, search } from '../../data/data'

const store = usePhraseStore()
const isModalOpen = ref(false)
</script>

<template>
  <div v-if="search.enabled">
    <Button
        variant="dock"
        :title="store.getCurrentLanguagePhrase('Search Quotes', search.buttonTooltip)"
        @click="isModalOpen = true"
    >
      <PhMagnifyingGlass
          :size="24"
          weight="bold"
          :class="store.isDark ? themes.dark.button.icon : themes.light.button.icon"
      />
    </Button>

    <Teleport to="body">
      <SearchModal
          v-if="isModalOpen"
          @close="isModalOpen = false"
      />
    </Teleport>
  </div>
</template>