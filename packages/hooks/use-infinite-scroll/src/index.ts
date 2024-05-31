import {
  assignRef,
  isElement,
  useCallbackRef,
  useUnmountEffect,
} from "@yamada-ui/utils"
import type { RefObject } from "react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

const isScrollable = (el: HTMLElement, isVertical: boolean) => {
  const style = getComputedStyle(el)

  if (["auto", "scroll", "overlay"].includes(style.overflow)) return true

  if (isVertical) {
    return ["auto", "scroll", "overlay"].includes(style.overflowY)
  } else {
    return ["auto", "scroll", "overlay"].includes(style.overflowX)
  }
}

const onScroll = ({
  root,
  isVertical,
  isReverse,
  behavior,
  position,
}: {
  root: HTMLElement | null | undefined
  isVertical: boolean
  isReverse?: boolean
  behavior?: ScrollBehavior
  position?: number
}) => {
  let options: ScrollToOptions
  const el =
    isElement(root) && isScrollable(root, isVertical) ? root : document.body

  if (isVertical) {
    options = { top: position ?? (isReverse ? el.scrollHeight : 0), behavior }
  } else {
    options = { left: position ?? (isReverse ? el.scrollWidth : 0), behavior }
  }

  if (el === document.body) {
    window.scrollTo(options)
  } else {
    el.scrollTo(options)
  }
}

const getScrollPosition = (
  root: HTMLElement | null | undefined,
  isVertical: boolean,
) => {
  const el =
    isElement(root) && isScrollable(root, isVertical) ? root : document.body

  if (isVertical) {
    return el.scrollHeight - el.scrollTop
  } else {
    return el.scrollWidth - el.scrollLeft
  }
}

export type UseInfiniteScrollProps = Omit<IntersectionObserverInit, "root"> & {
  /**
   * The orientation of the infinite scroll.
   *
   * @default 'vertical'
   */
  orientation?: "vertical" | "horizontal"
  /**
   * The element that is used as the viewport for checking visibility of the target.
   * Defaults to the browser viewport if not specified or if `null`.
   */
  rootRef?: RefObject<HTMLElement>
  /**
   * Margin around the root. Can have values similar to the CSS margin property,
   * e.g. "10px 20px 30px 40px" (top, right, bottom, left).
   */
  rootMargin?: string
  /**
   * Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed.
   */
  threshold?: number | number[]
  /**
   * If set the `onLoad` function will start from the given index.
   * If `initialLoad` is `true`, index starts from `0`.
   *
   * @default 1
   */
  startIndex?: number
  /**
   * The callback invoked when trigger is intersect.
   */
  onLoad?: ({
    index,
    entry,
    finish,
  }: {
    index: number
    finish: () => void
    entry?: IntersectionObserverEntry
  }) => void | Promise<void>
  /**
   * Ref to a reset function.
   */
  resetRef?: RefObject<(index?: number, runScroll?: boolean) => void>
  /**
   * Ref to a reset index function.
   */
  indexRef?: RefObject<(index: number) => void>
  /**
   * If `true`, the infinite scroll is disabled.
   *
   * @default false
   */
  isDisabled?: boolean
  /**
   *  If `true`, reverse direction.
   *
   * @default false
   */
  isReverse?: boolean
  /**
   * If `true`, invoke `onLoad` function for the first time.
   *
   * @default false
   */
  initialLoad?: boolean
  /**
   * Determines whether scrolling is instant or animates smoothly.
   */
  behavior?: ScrollBehavior
}

/**
 * `useInfiniteScroll` is a custom hook for providing infinite scroll functionality.
 *
 * @see Docs https://yamada-ui.com/hooks/use-infinite-scroll
 */
export const useInfiniteScroll = <T extends HTMLElement = HTMLDivElement>({
  orientation = "vertical",
  rootRef,
  rootMargin,
  threshold,
  initialLoad = false,
  startIndex = initialLoad ? 0 : 1,
  onLoad: onLoadProp,
  resetRef,
  indexRef: indexRefProp,
  isDisabled = false,
  isReverse = false,
  behavior,
}: UseInfiniteScrollProps = {}) => {
  const ref = useRef<T>(null)
  const indexRef = useRef<number>(startIndex)
  const processingRef = useRef<boolean>(false)
  const observerRef = useRef<IntersectionObserver | undefined>(undefined)
  const isMountedRef = useRef<boolean>(false)
  const prevScrollPosition = useRef<number>(0)
  const [isFinish, setIsFinish] = useState<boolean>(false)
  const onLoad = useCallbackRef(onLoadProp)
  const isVertical = orientation === "vertical"
  const options: IntersectionObserverInit = useMemo(() => {
    const root = rootRef?.current

    return { root, rootMargin, threshold }
  }, [rootMargin, rootRef, threshold])

  const onReset = useCallback(
    (index: number = 1, runScroll: boolean = true) => {
      indexRef.current = index

      setIsFinish(false)

      if (runScroll) {
        const root = rootRef?.current

        onScroll({ root, isVertical, isReverse, behavior })
      }

      if (isDisabled) return

      setTimeout(() => {
        const observer = observerRef.current
        const el = ref.current

        if (el) observer?.observe(el)
      })
    },
    [isDisabled, isReverse, rootRef, isVertical, behavior],
  )

  const onFinish = useCallback(() => {
    const observer = observerRef.current
    const el = ref.current

    if (el) observer?.unobserve(el)

    setIsFinish(true)
  }, [])

  const createObserver = useCallback(() => {
    const observer = new IntersectionObserver(async ([entry]) => {
      if (!entry.isIntersecting || processingRef.current) return

      const props = { index: indexRef.current, entry, finish: onFinish }

      processingRef.current = true

      const root = rootRef?.current

      if (isReverse) {
        prevScrollPosition.current = getScrollPosition(root, isVertical)
      }

      await onLoad?.(props)

      if (isReverse) {
        const position = prevScrollPosition.current

        onScroll({ root, isVertical, position })
      }

      indexRef.current += 1
      processingRef.current = false
    }, options)

    return observer
  }, [onFinish, onLoad, options, rootRef, isReverse, isVertical])

  useEffect(() => {
    const setupObserver = async () => {
      const el = ref.current
      const isMounted = isMountedRef.current
      const index = indexRef.current

      if (initialLoad && !isMounted) {
        processingRef.current = true

        await onLoad({ index, finish: onFinish })

        indexRef.current += 1
        processingRef.current = false
      }

      if (isDisabled) return

      observerRef.current = createObserver()

      const observer = observerRef.current

      if (isReverse && !isMounted) {
        const root = rootRef?.current

        onScroll({ root, isVertical, isReverse })

        isMountedRef.current = true
      }

      setTimeout(() => {
        if (el) observer.observe(el)
      })

      return () => {
        if (el) observer.unobserve(el)
      }
    }

    setupObserver()
  }, [
    createObserver,
    initialLoad,
    isDisabled,
    isReverse,
    isVertical,
    onFinish,
    onLoad,
    rootRef,
  ])

  useUnmountEffect(() => (isMountedRef.current = false))

  assignRef(resetRef, onReset)
  assignRef(indexRefProp, (index) => (indexRef.current = index))

  return { ref, isFinish }
}
