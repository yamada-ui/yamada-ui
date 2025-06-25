"use client"

import type { RefObject } from "react"
import type { Orientation } from "../../core"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  assignRef,
  isHTMLElement,
  useCallbackRef,
  useUnmountEffect,
} from "../../utils"

const isScrollable = (el: HTMLElement, vertical: boolean) => {
  const style = getComputedStyle(el)

  if (["auto", "overlay", "scroll"].includes(style.overflow)) return true

  if (vertical) {
    return ["auto", "overlay", "scroll"].includes(style.overflowY)
  } else {
    return ["auto", "overlay", "scroll"].includes(style.overflowX)
  }
}

const onScroll = ({
  behavior,
  position,
  reverse,
  root,
  vertical,
}: {
  root: HTMLElement | null | undefined
  vertical: boolean
  behavior?: ScrollBehavior
  position?: number
  reverse?: boolean
}) => {
  let options: ScrollToOptions
  const el =
    isHTMLElement(root) && isScrollable(root, vertical) ? root : document.body

  if (vertical) {
    options = { behavior, top: position ?? (reverse ? el.scrollHeight : 0) }
  } else {
    options = { behavior, left: position ?? (reverse ? el.scrollWidth : 0) }
  }

  if (el === document.body) {
    window.scrollTo(options)
  } else {
    el.scrollTo(options)
  }
}

const getScrollPosition = (
  root: HTMLElement | null | undefined,
  vertical: boolean,
) => {
  const el =
    isHTMLElement(root) && isScrollable(root, vertical) ? root : document.body

  if (vertical) {
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
   * If `true`, the infinite scroll is disabled.
   *
   * @default false
   */
  disabled?: boolean
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
   * The orientation of the infinite scroll.
   *
   * @default 'vertical'
   */
  orientation?: Orientation
  /**
   * Ref to a reset function.
   */
  resetRef?: RefObject<(index?: number, runScroll?: boolean) => void>
  /**
   *  If `true`, reverse direction.
   *
   * @default false
   */
  reverse?: boolean
  /**
   * Margin around the root. Can have values similar to the CSS margin property,
   * e.g. "10px 20px 30px 40px" (top, right, bottom, left).
   */
  rootMargin?: string
  /**
   * The element that is used as the viewport for checking visibility of the target.
   * Defaults to the browser viewport if not specified or if `null`.
   */
  rootRef?: RefObject<HTMLElement | null>
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
 * @see https://yamada-ui.com/hooks/use-infinite-scroll
 */
export const useInfiniteScroll = <T extends HTMLElement = HTMLDivElement>({
  behavior,
  disabled = false,
  indexRef: indexRefProp,
  initialLoad = false,
  orientation = "vertical",
  resetRef,
  reverse = false,
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
  const mountedRef = useRef<boolean>(false)
  const prevScrollPosition = useRef<number>(0)
  const [finish, setFinish] = useState<boolean>(false)
  const onLoad = useCallbackRef(onLoadProp)
  const vertical = orientation === "vertical"
  const options: IntersectionObserverInit = useMemo(() => {
    const root = rootRef?.current

    return { root, rootMargin, threshold }
  }, [rootMargin, rootRef, threshold])

  const onReset = useCallback(
    (index = 1, runScroll = true) => {
      indexRef.current = index

      setFinish(false)

      if (runScroll) {
        const root = rootRef?.current

        onScroll({ behavior, reverse, root, vertical })
      }

      if (disabled) return

      setTimeout(() => {
        const observer = observerRef.current
        const el = ref.current

        if (el) observer?.observe(el)
      })
    },
    [disabled, reverse, rootRef, vertical, behavior],
  )

  const onFinish = useCallback(() => {
    const observer = observerRef.current
    const el = ref.current

    if (el) observer?.unobserve(el)

    setFinish(true)
  }, [])

  const createObserver = useCallback(() => {
    const observer = new IntersectionObserver(async ([entry]) => {
      if (!entry?.isIntersecting || processingRef.current) return

      const props = { entry, finish: onFinish, index: indexRef.current }

      processingRef.current = true

      const root = rootRef?.current

      if (root) root.ariaBusy = "true"

      if (reverse) {
        prevScrollPosition.current = getScrollPosition(root, vertical)
      }

      await onLoad(props)

      if (reverse) {
        const position = prevScrollPosition.current

        onScroll({ position, root, vertical })
      }

      indexRef.current += 1
      processingRef.current = false
      if (root) root.ariaBusy = "false"
    }, options)

    return observer
  }, [onFinish, onLoad, options, rootRef, reverse, vertical])

  useEffect(() => {
    const setupObserver = async () => {
      const el = ref.current
      const mounted = mountedRef.current
      const index = indexRef.current
      const root = rootRef?.current

      if (initialLoad && !mounted) {
        processingRef.current = true
        if (root) root.ariaBusy = "true"

        await onLoad({ finish: onFinish, index })

        indexRef.current += 1
        processingRef.current = false
        if (root) root.ariaBusy = "false"
      }

      if (disabled) return

      observerRef.current = createObserver()

      const observer = observerRef.current

      if (reverse && !mounted) {
        const root = rootRef?.current

        onScroll({ reverse, root, vertical })

        mountedRef.current = true
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
    disabled,
    reverse,
    vertical,
    onFinish,
    onLoad,
    rootRef,
  ])

  useUnmountEffect(() => (mountedRef.current = false))

  assignRef(resetRef, onReset)
  assignRef(indexRefProp, (index) => (indexRef.current = index))

  return { ref, finish }
}
