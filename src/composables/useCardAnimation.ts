import { ref } from 'vue'

export function useCardAnimation(store: any) {
    const isAnimating = ref(false)
    const slideDirection = ref<'left' | 'right' | null>(null)
    const animationDuration = 500 // ms

    const animate = async (direction: 'left' | 'right', action: () => Promise<void>) => {
        if (isAnimating.value) return

        isAnimating.value = true
        slideDirection.value = direction

        // Start animation
        requestAnimationFrame(async () => {
            await action()

            // Reset animation state after completion
            setTimeout(() => {
                isAnimating.value = false
                slideDirection.value = null
            }, animationDuration)
        })
    }

    // Invertimos la dirección de la animación para que coincida con la dirección del botón
    const navigateNext = () => animate('right', store.nextPhrase)
    const navigatePrevious = () => animate('left', store.previousPhrase)

    return {
        isAnimating,
        slideDirection,
        navigateNext,
        navigatePrevious,
        animationDuration
    }
}