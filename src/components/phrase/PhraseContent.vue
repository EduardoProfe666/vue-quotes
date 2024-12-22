<script setup lang="ts">
import type { PhraseSchema } from '../../types/phrase-schema.ts'
import {generals} from "../../data/data.ts";

defineProps<{
  phrase: PhraseSchema | undefined
  isDark: boolean
}>()
</script>

<template>
  <div class="flex-1 z-10 space-y-8">
    <blockquote 
      class="relative animate-slide-up"
    >
      <div 
        class="absolute -left-6 top-0 h-full w-1 bg-light-cd_decoration hover:bg-light-cd_hover_decoration dark:bg-dark-cd_decoration dark:hover:bg-dark-cd_hover_decoration rounded-full transform transition-all duration-300 group-hover:scale-y-110"
      />
      <p 
        class="text-3xl md:text-4xl lg:text-5xl font-display leading-relaxed tracking-tight"
        :class="[
          isDark 
            ? 'text-dark-cd_t/90'
            : 'text-light-cd_t',
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
        class="h-0.5 flex-1"
        :class="[
          isDark ? 'bg-dark-cd_footer' : 'bg-light-cd_footer',
        ]"
      />
      <p 
        class="font-display text-xl italic"
        :class="[
          isDark ? 'text-dark-cd_author' : 'text-light-cd_author',
        ]"
      >
        {{ generals.author || phrase?.footer || 'Anonymous'  }}
      </p>
    </div>
  </div>
</template>