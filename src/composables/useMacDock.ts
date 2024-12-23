import { ref } from 'vue'

const SCALE_FACTOR = 2
const DISTANCE_INFLUENCE = 70

export function useMacDock() {
    const itemScales = ref<number[]>([])

    const calculateScale = (distance: number): number => {
        if (distance > DISTANCE_INFLUENCE) return 1

        // Smooth exponential scaling function
        const normalizedDistance = distance / DISTANCE_INFLUENCE
        const scale = 1 + (SCALE_FACTOR - 1) * Math.pow(1 - normalizedDistance, 2)

        return Math.max(1, Math.min(SCALE_FACTOR, scale))
    }

    const updateScale = (e: MouseEvent, dockRect: DOMRect, dockEl: HTMLElement) => {
        const mouseX = e.clientX
        const mouseY = e.clientY

        // Check if mouse is near the dock
        const isNearDock =
            mouseX >= dockRect.left - DISTANCE_INFLUENCE &&
            mouseX <= dockRect.right + DISTANCE_INFLUENCE &&
            mouseY >= dockRect.top - DISTANCE_INFLUENCE &&
            mouseY <= dockRect.bottom + DISTANCE_INFLUENCE

        const items = Array.from(dockEl.children) as HTMLElement[]

        itemScales.value = items.map(item => {
            if (!isNearDock) return 1

            const itemRect = item.getBoundingClientRect()
            const itemCenterX = itemRect.left + itemRect.width / 2
            const itemCenterY = itemRect.top + itemRect.height / 2

            const distance = Math.sqrt(
                Math.pow(mouseX - itemCenterX, 2) +
                Math.pow(mouseY - itemCenterY, 2)
            )

            return calculateScale(distance)
        })
    }

    return {
        itemScales,
        updateScale
    }
}