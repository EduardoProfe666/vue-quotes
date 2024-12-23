import { ref, computed } from 'vue'

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
                             threshold = 50,
                             resistance = 0.8
                         }: SwipeOptions) {
    const touchStartX = ref(0)
    const touchStartY = ref(0)
    const touchEndX = ref(0)
    const touchEndY = ref(0)
    const isDragging = ref(false)
    const dragDistance = ref(0)
    const swipeProgress = ref(0)

    const swipeStrength = computed(() => {
        const progress = Math.abs(dragDistance.value) / threshold
        return Math.min(progress, 1)
    })

    const handleTouchStart = (e: TouchEvent | MouseEvent) => {
        if ('touches' in e && e.touches.length > 1) return // Prevent multi-touch

        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY

        touchStartX.value = clientX
        touchStartY.value = clientY
        isDragging.value = true
        dragDistance.value = 0
        swipeProgress.value = 0
    }

    const handleTouchMove = (e: TouchEvent | MouseEvent) => {
        if (!isDragging.value) return

        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY

        touchEndX.value = clientX
        touchEndY.value = clientY

        const deltaX = touchEndX.value - touchStartX.value
        const deltaY = Math.abs(touchEndY.value - touchStartY.value)

        // Apply resistance to make the drag feel more natural
        const resistedDeltaX = deltaX * resistance

        if (deltaY > Math.abs(deltaX)) {
            isDragging.value = false
            return
        }

        dragDistance.value = resistedDeltaX
        swipeProgress.value = (resistedDeltaX / threshold) * 100
        e.preventDefault()
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
        } else {
            // Spring back animation if threshold not met
            dragDistance.value = 0
            swipeProgress.value = 0
        }

        isDragging.value = false
    }

    return {
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        isDragging,
        dragDistance,
        swipeProgress,
        swipeStrength
    }
}