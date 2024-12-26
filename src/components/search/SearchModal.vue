<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { PhX, PhMagnifyingGlass } from '@phosphor-icons/vue'
import { usePhraseStore } from '../../stores/phrases'
import SearchResult from './SearchResult.vue'
import { themes, search } from '../../data/data'

const emit = defineEmits<{
  close: []
}>()

const store = usePhraseStore()
const searchInput = ref('')
const inputRef = ref<HTMLInputElement>()

const searchResults = computed(() => {
  if (!searchInput.value.trim()) return []

  const query = searchInput.value.toLowerCase()
  return store.phrases.filter(phrase =>
      store.getCurrentLanguagePhrase('',phrase.message).toLowerCase().includes(query) ||
      (store.getCurrentLanguagePhrase('',phrase.footer)?.toLowerCase().includes(query)) ||
      (phrase.badgeId && store.getBadgeName(phrase.badgeId).toLowerCase().includes(query))
  )
})

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') emit('close')
}

onMounted(async () => {
  document.addEventListener('keydown', handleKeydown)
  await nextTick()
  inputRef.value?.focus()
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})

const themeClasses = computed(() => store.isDark ? themes.dark.search : themes.light.search)
</script>

<template>
  <div
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center p-4"
      @click.self="emit('close')"
  >
    <div
        class="w-full max-w-2xl mt-[15vh] relative animate-modal-slide-down rounded-lg overflow-hidden"
        :class="themeClasses.modalBackground"
    >
      <!-- Search Input -->
      <div class="relative">
        <div
            class="absolute inset-y-0 left-4 flex items-center pointer-events-none"
            :class="themeClasses.inputPlaceholder"
        >
          <PhMagnifyingGlass :size="20" weight="bold" />
        </div>

        <input
            ref="inputRef"
            v-model="searchInput"
            type="text"
            :placeholder="store.getCurrentLanguagePhrase('Search quotes, authors, or badges...', search.placeholder)"
            class="w-full pl-12 pr-4 py-4 outline-none border-b"
            :class="[
            themeClasses.inputBackground,
            themeClasses.inputText,
            themeClasses.inputBorder
          ]"
        />

        <button
            @click="emit('close')"
            class="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full"
            :class="[
            themeClasses.closeButton,
            themeClasses.closeButtonHover
          ]"
        >
          <PhX :size="20" />
        </button>
      </div>

      <div
          v-if="searchInput"
          class="max-h-[60vh] overflow-y-auto"
      >
        <div v-if="searchResults.length" class="p-2">
          <SearchResult
              v-for="result in searchResults"
              :key="store.getCurrentLanguagePhrase('', result.message)"
              :phrase="result"
              @select="emit('close')"
          />
        </div>
        <div
            v-else
            class="p-8 text-center"
            :class="themeClasses.resultSubtext"
        >
          {{store.getCurrentLanguagePhrase('No results found', search.noResultsText)}}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-modal-slide-down {
  animation: modalSlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes modalSlideDown {
  0% { transform: translateY(-8px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
</style>