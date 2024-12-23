<script setup lang="ts">
import {usePhraseStore} from "../../stores/phrases.ts";
import {themes} from "../../data/data.ts";

defineProps<{
  disabled?: boolean
  variant?: 'primary' | 'icon' | 'dock'
}>()

const store = usePhraseStore();
</script>

<template>
  <button
      :disabled="disabled"
      class="group flex items-center gap-2 transition-all duration-300"
      :class="[
      variant === 'dock'
        ? 'p-3 rounded-xl'
        : variant === 'icon'
          ? 'p-3 rounded-full hover:scale-110'
          : 'px-6 py-3 rounded-xl hover:scale-105',
      store.isDark ? themes.dark.button.background : themes.light.button.background,
      store.isDark ? themes.dark.button.text : themes.light.button.text,
      'disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed'
    ]"
  >
    <slot />
  </button>
</template>

<style scoped>
button {
  backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-font-smoothing: subpixel-antialiased;
}
</style>