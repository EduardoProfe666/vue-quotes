import { ref } from 'vue'

export function useFloatingDock() {
    const mousePosition = ref({ x: 0, y: 0 })
    const itemPositions = ref<Array<{ x: number; y: number }>>([])

    const updatePositions = (e: MouseEvent, dockEl: HTMLElement) => {
        mousePosition.value = { x: e.clientX, y: e.clientY }

        const items = Array.from(dockEl.children) as HTMLElement[]
        itemPositions.value = items.map(item => {
            const rect = item.getBoundingClientRect()
            return {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            }
        })
    }

    return {
        mousePosition,
        itemPositions,
        updatePositions
    }
}