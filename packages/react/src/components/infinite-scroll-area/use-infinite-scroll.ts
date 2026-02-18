"use client"

import type { RefObject } from "react"
import type { Orientation } from "../../core"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useEnvironment } from "../../core"
import { assignRef, useCallbackRef } from "../../utils"

const isScrollable = (el: HTMLElement, vertical: boolean) => {
  const style = getComputedStyle(el)

  if (["auto", "overlay", "scroll"].includes(style.overflow)) return true

  if (vertical) {
    return ["auto", "overlay", "scroll"].includes(style.overflowY)
  } else {
    return ["auto", "overlay", "scroll"].includes(style.overflowX)
  }
}

export interface UseInfiniteScrollProps extends Omit<
  IntersectionObserverInit,
  "root"
> {
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
    entry?: IntersectionObserverEntry
    finish: () => void
    index: number
  }) => Promise<void> | void
}

/**
 * `useInfiniteScroll` is a custom hook for providing infinite scroll functionality.
 *
 * @see https://yamada-ui.com/docs/hooks/use-infinite-scroll
 */
export const useInfiniteScroll = <Y extends HTMLElement = HTMLDivElement>({
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
  const ref = useRef<Y>(null)
  const { getDocument, getWindow } = useEnvironment()
  const indexRef = useRef<number>(startIndex)
  const processingRef = useRef<boolean>(false)
  const observerRef = useRef<IntersectionObserver | undefined>(undefined)
  const [finish, setFinish] = useState<boolean>(false)
  const onLoad = useCallbackRef(onLoadProp)
  const vertical = orientation === "vertical"
  const direction = vertical ? "top" : "left"
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
        const body = getDocument()?.body
        const el = root && isScrollable(root, vertical) ? root : body

        if (el) {
          const target = el === body ? getWindow() : el
          const position = reverse
            ? vertical
              ? el.scrollHeight
              : el.scrollWidth
            : 0

          target?.scrollTo({ behavior, [direction]: position })
        }
      }

      if (disabled) return

      setTimeout(() => {
        const observer = observerRef.current
        const el = ref.current

        if (el) observer?.observe(el)
      })
    },
    [
      disabled,
      rootRef,
      getDocument,
      vertical,
      getWindow,
      reverse,
      behavior,
      direction,
    ],
  )

  const onFinish = useCallback(() => {
    const observer = observerRef.current
    const el = ref.current

    if (el) observer?.unobserve(el)

    setFinish(true)
  }, [])

  const createObserver = useCallback(() => {
    const observer = new IntersectionObserver(async ([entry]) => {
      const root = rootRef?.current
      const body = getDocument()?.body
      const el = root && isScrollable(root, vertical) ? root : body

      if (!entry?.isIntersecting || processingRef.current || !el) return

      const props = { entry, finish: onFinish, index: indexRef.current }

      processingRef.current = true

      if (root) root.ariaBusy = "true"

      let prevScrollPosition = 0

      if (reverse)
        prevScrollPosition = vertical ? el.scrollHeight : el.scrollWidth

      await onLoad(props)

      if (reverse)
        setTimeout(() => {
          const target = el === body ? getWindow() : el
          const position =
            (vertical ? el.scrollHeight : el.scrollWidth) - prevScrollPosition

          target?.scrollTo({ [direction]: position })
        })

      indexRef.current += 1
      processingRef.current = false

      if (root) root.ariaBusy = "false"
    }, options)

    return observer
  }, [
    options,
    rootRef,
    getDocument,
    vertical,
    onFinish,
    reverse,
    onLoad,
    getWindow,
    direction,
  ])

  useEffect(() => {
    const setTabIndexAttribute = () => {
      const root = rootRef?.current
      if (
        root &&
        isScrollable(root, vertical) &&
        !root.hasAttribute("tabindex")
      ) {
        root.setAttribute("tabindex", "0")
      }
    }

    const setupObserver = async () => {
      const el = ref.current
      const index = indexRef.current
      const root = rootRef?.current

      if (initialLoad) {
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

      if (reverse) {
        const root = rootRef?.current
        const body = getDocument()?.body
        const el = root && isScrollable(root, vertical) ? root : body

        if (el) {
          const target = el === body ? getWindow() : el
          const position = vertical ? el.scrollHeight : el.scrollWidth

          target?.scrollTo({ [direction]: position })
        }
      }

      setTimeout(() => {
        if (el) observer.observe(el)
      })

      return () => {
        if (el) observer.unobserve(el)
      }
    }

    setTabIndexAttribute()
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
    getDocument,
    getWindow,
    direction,
  ])

  assignRef(resetRef, onReset)
  assignRef(indexRefProp, (index) => (indexRef.current = index))

  return { ref, finish }
}
