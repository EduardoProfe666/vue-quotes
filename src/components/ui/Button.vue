<script setup lang="ts">
defineProps<{
  disabled?: boolean
  variant?: 'primary' | 'icon'
}>()
</script>

<template>
  <button
    :disabled="disabled"
    class="group flex items-center gap-2 transition-all duration-300"
    :class="[
      variant === 'icon' 
        ? 'p-3 rounded-full hover:scale-110' 
        : 'px-6 py-3 rounded-xl hover:scale-105',
      'bg-light-button_background text-light-button_t hover:bg-light-button_hover_background hover:text-light-button_hover_t',
      'dark:bg-dark-button_background dark:text-dark-button_t dark:hover:bg-dark-button_hover_background dark:hover:text-dark-button_hover_t',
      'disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed'
    ]"
  >
    <slot />
  </button>
</template>