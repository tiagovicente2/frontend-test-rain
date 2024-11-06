import { useEffect } from 'react'

type IntersectionOptions = {
  target: any
  onIntersect: () => void
  enabled: boolean
}

const useIntersection = (options: IntersectionOptions) => {
  const { target, onIntersect, enabled } = options

  useEffect(() => {
    if (!enabled) return

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      {
        rootMargin: '40px',
        threshold: 1
      }
    )

    const element = target && target?.current

    if (!element) return

    observer.observe(element)
  }, [enabled, onIntersect, target])
}

export default useIntersection
