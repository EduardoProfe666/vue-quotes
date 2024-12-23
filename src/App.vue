<script setup lang="ts">
import {onBeforeMount, onMounted} from 'vue'
import { usePhraseStore } from './stores/phrases'
import PhraseCard from './components/PhraseCard.vue'
import {generals, metadata, themes} from "./data/data.ts";

const store = usePhraseStore()

onMounted(async () => {
  await store.fetchPhrases()
})

onBeforeMount(() => {
  document.title = store.getCurrentLanguagePhrase('🗣️ Quotes 🗣️', metadata.title);

  // Description
  const newDescriptionMetaTag = document.createElement('meta');
  newDescriptionMetaTag.name = 'description';
  newDescriptionMetaTag.content = store.getCurrentLanguagePhrase('Some good quotes', metadata.description);
  document.head.appendChild(newDescriptionMetaTag);

  // Language
  document.documentElement.lang = store.getCurrentLanguagePhrase('en', metadata.language);

  // Author
  const newAuthorMetaTag = document.createElement('meta');
  newAuthorMetaTag.name = 'author';
  newAuthorMetaTag.content = metadata.author || 'EduardoProfe666🎩';
  document.head.appendChild(newAuthorMetaTag);

  // -------- Open Graph -------- //
  // Title
  const newOgTitleMetaTag = document.createElement('meta');
  newOgTitleMetaTag.setAttribute('property', 'og:title');
  newOgTitleMetaTag.content = store.getCurrentLanguagePhrase('🗣️ Quotes 🗣️', metadata.title);
  document.head.appendChild(newOgTitleMetaTag);

  // Description
  const newOgDescriptionMetaTag = document.createElement('meta');
  newOgDescriptionMetaTag.setAttribute('property', 'og:description');
  newOgDescriptionMetaTag.content = store.getCurrentLanguagePhrase('Some good quotes', metadata.description);
  document.head.appendChild(newOgDescriptionMetaTag);

  // Url
  const newOgUrlMetaTag = document.createElement('meta');
  newOgUrlMetaTag.setAttribute('property', 'og:url');
  newOgUrlMetaTag.content = metadata.url || 'https://eduardoprofe666.github.io';
  document.head.appendChild(newOgUrlMetaTag);

  // Site Name
  const newOgSiteNameMetaTag = document.createElement('meta');
  newOgSiteNameMetaTag.setAttribute('property', 'og:site_name');
  newOgSiteNameMetaTag.content = store.getCurrentLanguagePhrase('🗣️ Quotes 🗣️', metadata.title);
  document.head.appendChild(newOgSiteNameMetaTag);

  // Locale
  const newOgLocaleMetaTag = document.createElement('meta');
  newOgLocaleMetaTag.setAttribute('property', 'og:locale');
  newOgLocaleMetaTag.content = store.getCurrentLanguagePhrase('en_US', metadata.locale);
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
    class="min-h-screen transition-colors duration-500"
    :class="store.isDark ? themes.dark.main.background : themes.light.main.background"
  >
    <div class="container mx-auto py-12">
      <h1
        class="text-center mb-12 animate-slide-down"
        :class="store.isDark ? themes.dark.main.text : themes.light.main.text"
      >
        {{ store.getCurrentLanguagePhrase('', generals.title) }}
      </h1>
      <PhraseCard />
    </div>
  </main>
</template>