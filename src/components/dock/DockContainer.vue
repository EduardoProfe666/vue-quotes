<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useMacDock } from '../../composables/useMacDock'

const dockRef = ref<HTMLElement | null>(null)
const { updateScale, itemScales } = useMacDock()

const handleMouseMove = (e: MouseEvent) => {
  if (!dockRef.value) return
  const rect = dockRef.value.getBoundingClientRect()
  updateScale(e, rect, dockRef.value)
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<template>
  <div class="fixed bottom-6 right-1/2 translate-x-1/2 flex items-center justify-center">
    <div
        ref="dockRef"
        class="dock-container bg-white/10 backdrop-blur-xl rounded-2xl p-2 shadow-2xl
             border border-white/20 flex items-center gap-2
             hover:bg-white/15 transition-colors duration-300"
    >
      <slot :scales="itemScales" />
    </div>
  </div>
</template>

<style scoped>
.dock-container {
  isolation: isolate;
  transform: translateZ(0);
  will-change: transform;
}
</style>