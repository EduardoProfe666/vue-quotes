<script setup lang="ts">
import type { PhraseSchema } from '../../types/phrase-schema.ts'
import {generals, themes} from "../../data/data.ts";

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
        class="absolute -left-6 top-0 h-full w-1 rounded-full transform transition-all duration-300 group-hover:scale-y-110"
        :class="isDark ? themes.dark.card.decorationText : themes.light.card.decorationText"
      />
      <p 
        class="text-3xl md:text-4xl lg:text-5xl font-display leading-relaxed tracking-tight"
        :class="[
          isDark 
            ? themes.dark.card.text
            : themes.light.card.text,
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
          isDark ? themes.dark.card.decorationFooter : themes.light.card.decorationFooter,
        ]"
      />
      <p 
        class="font-display text-xl italic"
        :class="[
          isDark ? themes.dark.card.footer : themes.light.card.footer,
        ]"
      >
        {{ phrase?.footer || generals?.author  || 'Anonymous'  }}
      </p>
    </div>
  </div>
</template>