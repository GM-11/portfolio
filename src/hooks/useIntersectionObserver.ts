import { useEffect, useRef, useState, type RefObject } from 'react'

type UseIntersectionObserverReturn<T extends HTMLElement> = {
  ref: RefObject<T | null>
  isVisible: boolean
}

const DEFAULT_OPTIONS: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2,
}

export default function useIntersectionObserver<T extends HTMLElement>(
  options?: IntersectionObserverInit,
): UseIntersectionObserverReturn<T> {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const target = ref.current
    if (!target || isVisible) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { ...DEFAULT_OPTIONS, ...options },
    )

    observer.observe(target)

    return () => observer.disconnect()
  }, [isVisible, options])

  return { ref, isVisible }
}
