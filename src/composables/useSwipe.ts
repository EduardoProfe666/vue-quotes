import {computed, ref} from 'vue'

interface SwipeOptions {
    onSwipeLeft: () => void
    onSwipeRight: () => void
    threshold?: number
    minSwipeDistance?: number
    resistance?: number
}

export function useSwipe({
                             onSwipeLeft,
                             onSwipeRight,
                             threshold = 100,
                             resistance = 0.5
                         }: SwipeOptions) {
    const touchStartX = ref(0)
    const touchStartY = ref(0)
    const touchEndX = ref(0)
    const touchEndY = ref(0)
    const isDragging = ref(false)
    const dragDistance = ref(0)
    const swipeDirection = ref<'left' | 'right' | null>(null)

    const swipeStrength = computed(() => {
        const progress = Math.abs(dragDistance.value) / threshold
        return Math.min(progress, 1)
    })

    const handleTouchStart = (e: TouchEvent | MouseEvent) => {
        if ('touches' in e && e.touches.length > 1) return

        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY

        touchStartX.value = clientX
        touchStartY.value = clientY
        isDragging.value = true
        dragDistance.value = 0
        swipeDirection.value = null
    }

    const handleTouchMove = (e: TouchEvent | MouseEvent) => {
        if (!isDragging.value) return

        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY

        touchEndX.value = clientX
        touchEndY.value = clientY

        const deltaX = touchEndX.value - touchStartX.value
        const deltaY = Math.abs(touchEndY.value - touchStartY.value)

        if (deltaY > Math.abs(deltaX) * 0.8) {
            isDragging.value = false
            dragDistance.value = 0
            return
        }

        dragDistance.value = deltaX * resistance
        swipeDirection.value = deltaX > 0 ? 'right' : 'left'

        if (Math.abs(deltaX) > 10) {
            e.preventDefault()
        }
    }

    const handleTouchEnd = () => {
        if (!isDragging.value) return

        const diff = touchEndX.value - touchStartX.value

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                onSwipeRight()
            } else {
                onSwipeLeft()
            }
        }

        isDragging.value = false
        dragDistance.value = 0
        swipeDirection.value = null
    }

    return {
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        isDragging,
        dragDistance,
        swipeDirection,
        swipeStrength
    }
}