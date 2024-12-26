<script setup lang="ts">
import { ref, computed } from 'vue'
import { usePhraseStore } from '../../stores/phrases'
import { buttons, languages, themes } from '../../data/data'

const emit = defineEmits<{
  close: []
}>()

const store = usePhraseStore()
const selectedLanguage = ref(store.getCurrentLanguage() )

const changeLanguage = (languageId: string) => {
  store.setCurrentLanguage(languageId)
  selectedLanguage.value = languageId
  emit('close')
}

const themeClasses = computed(() => store.isDark ? themes.dark : themes.light)
</script>

<template>
  <div
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center p-4"
      @click.self="emit('close')"
  >
    <div class="w-full max-w-md mt-[15vh] relative rounded-lg overflow-hidden shadow-lg transition-transform transform animate-modal-slide-down" :class="themeClasses.internationalization.modalBackground">
      <div class="p-6">
        <h2 :class="themeClasses.internationalization.itemText" class="text-xl font-bold mb-4 text-center">{{ store.getCurrentLanguagePhrase('Select Language', buttons.languageButtonText) }}</h2>
        <ul>
          <li
              v-for="language in languages"
              :key="language.id"
              class="py-2 px-4 cursor-pointer transition-colors duration-200 ease-in-out rounded-lg"
              :class="[
              themeClasses.internationalization.itemBackground,
              themeClasses.internationalization.itemText,
              themeClasses.internationalization.itemBackground,
              selectedLanguage === language.id ? themeClasses.internationalization.selectedText + ' ' + themeClasses.internationalization.selectedBackground : '',
            ]"
              @click="changeLanguage(language.id)"
          >
            {{ language.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes modalSlideDown {
  0% { transform: translateY(-8px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

.animate-modal-slide-down {
  animation: modalSlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
