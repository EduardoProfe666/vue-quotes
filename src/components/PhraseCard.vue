<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { usePhraseStore } from '../stores/phrases'
import { toPng } from 'html-to-image'
import { downloadImage } from '../utils/image'
import NavigationButtons from './NavigationButtons.vue'
import PhraseContent from './phrase/PhraseContent.vue'
import PhraseImage from './phrase/PhraseImage.vue'
import Button from './ui/Button.vue'
import { Sun, Moon, Github } from './icons'
import { toast } from 'vue-sonner'

const store = usePhraseStore()
const cardRef = ref<HTMLElement | null>(null)
const imageUrl = ref('/choco.png')
const isExporting = ref(false)

const exportAsPng = async () => {
  if (!cardRef.value) return
  isExporting.value = true

  try {
    const img = cardRef.value.querySelector('img')
    if (img) {
      await new Promise((resolve) => {
        img.onload = resolve
        if (img.complete) resolve(null)
      })
    }

    const dataUrl = await toPng(cardRef.value, {
      quality: 0.95,
      cacheBust: true
    })

    downloadImage(dataUrl, 'inspiring-phrase.png')
    toast.success('Frase exportada con éxito')
  } catch (error) {
    console.error('Error exporting image:', error)
    toast.error('Falló la exportación. Intente más tarde')
  } finally {
    isExporting.value = false
  }
}

const updateImage = () => {
  imageUrl.value = '/choco.png'
}

onMounted(() => {
  store.$subscribe((_, state) => {
    if (state.currentIndex !== undefined) {
      updateImage()
    }
  })
})
</script>

<template>
  <div class="w-full max-w-5xl mx-auto p-4">
    <div
        ref="cardRef"
        class="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 animate-fade-in backdrop-blur-sm group"
        :class="[
        store.isDark ? 'bg-gray-800/90 text-white' : 'bg-white/90 text-gray-800'
      ]"
    >
      <div class="flex flex-col md:flex-row items-center p-8 md:p-12 gap-8">
        <PhraseContent
            :phrase="store.currentPhrase"
            :is-dark="store.isDark"
        />
        <PhraseImage
            :image-url="imageUrl"
            :is-dark="store.isDark"
        />
      </div>
    </div>

    <div class="mt-12 space-y-6">
      <NavigationButtons
          :is-exporting="isExporting"
          @export="exportAsPng"
      />

      <!-- Nuevo botón flotante -->
      <a href="https://eduardoprofe666.github.io" target="_blank" rel="noopener noreferrer">
        <Button
            variant="icon"
            class="fixed bottom-20 right-4 shadow-lg"
            title="Mi Portfolio"
        >
          <Github
              :size="24"
              weight="bold"
          />
        </Button>
      </a>

      <Button
          variant="icon"
          @click="store.toggleDarkMode"
          class="fixed bottom-6 right-4 shadow-lg"
          :title="store.isDark ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'"
      >
        <component
            :is="store.isDark ? Sun : Moon"
            :size="24"
            weight="bold"
        />
      </Button>
    </div>
  </div>

  <Toaster position="top-center" />
</template>
