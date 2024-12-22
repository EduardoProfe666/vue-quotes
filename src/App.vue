<script setup lang="ts">
import {onBeforeMount, onMounted} from 'vue'
import { usePhraseStore } from './stores/phrases'
import PhraseCard from './components/PhraseCard.vue'
import {generals, metadata} from "./data/data.ts";

const store = usePhraseStore()

onMounted(async () => {
  await store.fetchPhrases()
})

onBeforeMount(() => {
  document.title = metadata.title || '🗣️ Quotes 🗣️';

  // Description
  const newDescriptionMetaTag = document.createElement('meta');
  newDescriptionMetaTag.name = 'description';
  newDescriptionMetaTag.content = metadata.description || 'Some good quotes';
  document.head.appendChild(newDescriptionMetaTag);

  // Language
  document.documentElement.lang = metadata.language || 'en';

  // Author
  const newAuthorMetaTag = document.createElement('meta');
  newAuthorMetaTag.name = 'author';
  newAuthorMetaTag.content = metadata.author || 'EduardoProfe666🎩';
  document.head.appendChild(newAuthorMetaTag);

  // -------- Open Graph -------- //
  // Title
  const newOgTitleMetaTag = document.createElement('meta');
  newOgTitleMetaTag.setAttribute('property', 'og:title');
  newOgTitleMetaTag.content = metadata.title || '🗣️ Quotes 🗣️';
  document.head.appendChild(newOgTitleMetaTag);

  // Description
  const newOgDescriptionMetaTag = document.createElement('meta');
  newOgDescriptionMetaTag.setAttribute('property', 'og:description');
  newOgDescriptionMetaTag.content = metadata.description || 'Some good quotes';
  document.head.appendChild(newOgDescriptionMetaTag);

  // Url
  const newOgUrlMetaTag = document.createElement('meta');
  newOgUrlMetaTag.setAttribute('property', 'og:url');
  newOgUrlMetaTag.content = metadata.url || 'https://eduardoprofe666.github.io';
  document.head.appendChild(newOgUrlMetaTag);

  // Site Name
  const newOgSiteNameMetaTag = document.createElement('meta');
  newOgSiteNameMetaTag.setAttribute('property', 'og:site_name');
  newOgSiteNameMetaTag.content = metadata.title || '🗣️ Quotes 🗣️';
  document.head.appendChild(newOgSiteNameMetaTag);

  // Locale
  const newOgLocaleMetaTag = document.createElement('meta');
  newOgLocaleMetaTag.setAttribute('property', 'og:locale');
  newOgLocaleMetaTag.content = metadata.locale || 'en_US';
  document.head.appendChild(newOgLocaleMetaTag);

  // Locale
  const newOgImageMetaTag = document.createElement('meta');
  newOgImageMetaTag.setAttribute('property', 'og:image');
  newOgImageMetaTag.content = metadata.image || 'https://raw.githubusercontent.com/EduardoProfe666/choco-frases-ui/refs/heads/main/public/banner.png';
  document.head.appendChild(newOgImageMetaTag);
});
</script>

<template>
  <main 
    class="min-h-screen transition-colors duration-500 bg-gradient-to-br from-light-background_from to-light-background_to dark:from-dark-background_from dark:to-dark-background_to"
  >
    <div class="container mx-auto py-12">
      <h1
        class="text-5xl font-bold text-center mb-12 text-light-t dark:text-dark-t animate-slide-down"
      >
        {{ generals.title }}
      </h1>
      <PhraseCard />
    </div>
  </main>
</template>