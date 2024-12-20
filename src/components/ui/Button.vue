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
      'bg-primary-500 text-white hover:bg-primary-600',
      'disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed'
    ]"
  >
    <slot />
  </button>
</template>