import { ref } from 'vue'
import { toPng } from 'html-to-image'
import { downloadImage } from '../utils/image'
import { toast } from 'vue-sonner'
import { buttons } from '../data/data'

export function useExport() {
    const isExporting = ref(false)

    const exportAsPng = async (element: HTMLElement | null) => {
        if (!element) return
        isExporting.value = true

        try {
            const img = element.querySelector('img')
            if (img) {
                await new Promise((resolve) => {
                    img.onload = resolve
                    if (img.complete) resolve(null)
                })
            }

            const dataUrl = await toPng(element, {
                quality: 0.95,
                pixelRatio: 3,
                cacheBust: true
            })

            downloadImage(dataUrl, 'phrase.png')
            toast.success(buttons.exportSuccessNotification || 'Successfully Exported Phrase')
        } catch (error) {
            console.error('Error exporting image:', error)
            toast.error(buttons.exportFailedNotification || 'Export Failed. Try later')
        } finally {
            isExporting.value = false
        }
    }

    return {
        isExporting,
        exportAsPng
    }
}