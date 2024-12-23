<script setup lang="ts">
defineProps<{
  scale?: number
}>()
</script>

<template>
  <div
      class="dock-item"
      :style="{
      transform: `scale(${scale || 1})`,
      transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
    }"
  >
    <slot />
  </div>
</template>

<style scoped>
.dock-item {
  will-change: transform;
  transform-origin: bottom;
}
</style>