import type { RefObject } from "react"
import {
  assignRef,
  isElement,
  useCallbackRef,
  useUnmountEffect,
} from "@yamada-ui/utils"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

const isScrollable = (el: HTMLElement, isVertical: boolean) => {
  const style = getComputedStyle(el)

  if (["auto", "overlay", "scroll"].includes(style.overflow)) return true

  if (isVertical) {
    return ["auto", "overlay", "scroll"].includes(style.overflowY)
  } else {
    return ["auto", "overlay", "scroll"].includes(style.overflowX)
  }
}

const onScroll = ({
  behavior,
  isReverse,
  isVertical,
  position,
  root,
}: {
  isVertical: boolean
  root: HTMLElement | null | undefined
  behavior?: ScrollBehavior
  isReverse?: boolean
  position?: number
}) => {
  let options: ScrollToOptions
  const el =
    isElement(root) && isScrollable(root, isVertical) ? root : document.body

  if (isVertical) {
    options = { behavior, top: position ?? (isReverse ? el.scrollHeight : 0) }
  } else {
    options = { behavior, left: position ?? (isReverse ? el.scrollWidth : 0) }
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

export interface UseInfiniteScrollProps
  extends Omit<IntersectionObserverInit, "root"> {
  /**
   * Determines whether scrolling is instant or animates smoothly.
   */
  behavior?: ScrollBehavior
  /**
   * Ref to a reset index function.
   */
  indexRef?: RefObject<(index: number) => void>
  /**
   * If `true`, invoke `onLoad` function for the first time.
   *
   * @default false
   */
  initialLoad?: boolean
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
   * The orientation of the infinite scroll.
   *
   * @default 'vertical'
   */
  orientation?: "horizontal" | "vertical"
  /**
   * Ref to a reset function.
   */
  resetRef?: RefObject<(index?: number, runScroll?: boolean) => void>
  /**
   * Margin around the root. Can have values similar to the CSS margin property,
   * e.g. "10px 20px 30px 40px" (top, right, bottom, left).
   */
  rootMargin?: string
  /**
   * The element that is used as the viewport for checking visibility of the target.
   * Defaults to the browser viewport if not specified or if `null`.
   */
  rootRef?: RefObject<HTMLElement>
  /**
   * If set the `onLoad` function will start from the given index.
   * If `initialLoad` is `true`, index starts from `0`.
   *
   * @default 1
   */
  startIndex?: number
  /**
   * Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed.
   */
  threshold?: number | number[]
  /**
   * The callback invoked when trigger is intersect.
   */
  onLoad?: ({
    entry,
    finish,
    index,
  }: {
    finish: () => void
    index: number
    entry?: IntersectionObserverEntry
  }) => Promise<void> | void
}

/**
 * `useInfiniteScroll` is a custom hook for providing infinite scroll functionality.
 *
 * @see Docs https://yamada-ui.com/hooks/use-infinite-scroll
 */
export const useInfiniteScroll = <T extends HTMLElement = HTMLDivElement>({
  behavior,
  indexRef: indexRefProp,
  initialLoad = false,
  isDisabled = false,
  isReverse = false,
  orientation = "vertical",
  resetRef,
  rootMargin,
  rootRef,
  startIndex = initialLoad ? 0 : 1,
  threshold,
  onLoad: onLoadProp,
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
    (index = 1, runScroll = true) => {
      indexRef.current = index

      setIsFinish(false)

      if (runScroll) {
        const root = rootRef?.current

        onScroll({ behavior, isReverse, isVertical, root })
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
      if (!entry?.isIntersecting || processingRef.current) return

      const props = { entry, finish: onFinish, index: indexRef.current }

      processingRef.current = true

      const root = rootRef?.current

      if (root) root.ariaBusy = "true"

      if (isReverse) {
        prevScrollPosition.current = getScrollPosition(root, isVertical)
      }

      await onLoad(props)

      if (isReverse) {
        const position = prevScrollPosition.current

        onScroll({ isVertical, position, root })
      }

      indexRef.current += 1
      processingRef.current = false
      if (root) root.ariaBusy = "false"
    }, options)

    return observer
  }, [onFinish, onLoad, options, rootRef, isReverse, isVertical])

  useEffect(() => {
    const setupObserver = async () => {
      const el = ref.current
      const isMounted = isMountedRef.current
      const index = indexRef.current
      const root = rootRef?.current

      if (initialLoad && !isMounted) {
        processingRef.current = true
        if (root) root.ariaBusy = "true"

        await onLoad({ finish: onFinish, index })

        indexRef.current += 1
        processingRef.current = false
        if (root) root.ariaBusy = "false"
      }

      if (isDisabled) return

      observerRef.current = createObserver()

      const observer = observerRef.current

      if (isReverse && !isMounted) {
        const root = rootRef?.current

        onScroll({ isReverse, isVertical, root })

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
