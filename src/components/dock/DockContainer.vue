<script setup lang="ts">
import { ref } from 'vue'

const dockRef = ref<HTMLElement | null>(null)
</script>

<template>
  <div class="fixed bottom-6 right-1/2 translate-x-1/2 flex items-center justify-center">
    <div
        ref="dockRef"
        class="bg-white/10 backdrop-blur-xl rounded-2xl p-2 shadow-2xl
             border border-white/20 flex items-center gap-2
             hover:bg-white/15 transition-colors duration-300"
    >
      <slot />
    </div>
  </div>
</template>