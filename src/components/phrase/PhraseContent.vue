<script setup lang="ts">
import type { Phrase } from '../../types/phrase'

defineProps<{
  phrase: Phrase | undefined
  isDark: boolean
}>()
</script>

<template>
  <div class="flex-1 z-10 space-y-8">
    <blockquote 
      class="relative animate-slide-up"
    >
      <div 
        class="absolute -left-6 top-0 h-full w-1 bg-primary-500 rounded-full transform transition-all duration-300 group-hover:scale-y-110"
      />
      <p 
        class="text-3xl md:text-4xl lg:text-5xl font-display leading-relaxed tracking-tight"
        :class="[
          isDark 
            ? 'text-white/90' 
            : 'text-gray-800'
        ]"
      >
        "{{ phrase?.message }}"
      </p>
    </blockquote>
    
    <div 
      class="flex items-center gap-4 animate-slide-up"
      style="animation-delay: 200ms;"
    >
      <div 
        class="h-px flex-1"
        :class="[
          isDark ? 'bg-white/20' : 'bg-gray-300'
        ]"
      />
      <p 
        class="font-display text-xl italic"
        :class="[
          isDark ? 'text-primary-300' : 'text-primary-600'
        ]"
      >
        ChocolateMC
      </p>
    </div>
  </div>
</template>