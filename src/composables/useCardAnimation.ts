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

    const navigateNext = () => animate('left', store.nextPhrase)
    const navigatePrevious = () => animate('right', store.previousPhrase)

    return {
        isAnimating,
        slideDirection,
        navigateNext,
        navigatePrevious,
        animationDuration
    }
}