<script setup lang="ts">
defineProps<{
  imageUrl: string
  isDark: boolean
}>()
</script>

<template>
  <div class="w-full md:w-1/3 relative group">
    <div
      class="absolute inset-0"
    />
    <img
      :src="imageUrl"
      :key="imageUrl"
      alt="ChocolateMC"
      class="w-full h-64 md:h-96 object-cover transition-transform duration-300 group-hover:scale-105 rounded-effect"
      crossorigin="anonymous"
    />
  </div>
</template>

<style scoped>
img{
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.5));
  border-radius: 20px;
}
</style>