import { useEffect, useState, useCallback } from 'react'

type windowSizeType = { width: number; height: number }

const getWindowSize = (): windowSizeType => ({
    width: window.innerWidth,
    height: window.innerHeight
})

export default function useWindowSize(): windowSizeType {
    const getSize = useCallback(() => getWindowSize(), [])

    const [windowSize, setWindowSize] = useState(getSize)

    useEffect(() => {
        function handleResize() {
            setWindowSize(getSize())
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [getSize]) // Empty array ensures that effect is only run on mount and unmount

    return windowSize
}
