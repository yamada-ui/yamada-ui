"use client"

import type {
  EmblaCarouselType,
  EmblaOptionsType,
  EmblaPluginType,
} from "embla-carousel"
import type { KeyboardEvent, RefObject } from "react"
import type {
  HTMLProps,
  Orientation,
  PropGetter,
  RequiredPropGetter,
} from "../../core"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useRef, useState } from "react"
import { useBoolean } from "../../hooks/use-boolean"
import { useControllableState } from "../../hooks/use-controllable-state"
import {
  assignRef,
  createContext,
  dataAttr,
  handlerAll,
  isFunction,
  mergeRefs,
  runKeyAction,
  useIds,
  useUpdateEffect,
} from "../../utils"

type EmblaOptions = Required<EmblaOptionsType>
export type CarouselAlign = EmblaOptions["align"]
export type CarouselContainScroll = EmblaOptions["containScroll"]
export type CarouselInViewThreshold = EmblaOptions["inViewThreshold"]
export type CarouselWatchDrag = EmblaOptions["watchDrag"]
export type CarouselWatchResize = EmblaOptions["watchResize"]
export type CarouselWatchSlides = EmblaOptions["watchSlides"]
export type CarouselControl = EmblaCarouselType
export type CarouselPlugin = EmblaPluginType

export interface CarouselContext
  extends Omit<UseCarouselReturn, "getRootProps"> {}

export const [CarouselContext, useCarouselContext] =
  createContext<CarouselContext>({ name: "CarouselContext" })

export interface UseCarouselProps
  extends Omit<HTMLProps<"section">, "onChange"> {
  /**
   * The alignment of the carousel.
   *
   * @default 'center'
   */
  align?: CarouselAlign
  /**
   * If `true`, the carousel will be autoplay.
   *
   * @default false
   */
  autoplay?: boolean
  /**
   * Clear leading and trailing empty space that causes excessive scrolling.
   * Use trimSnaps to only use snap points that trigger scrolling or keepSnaps to keep them.
   *
   * @default false
   */
  containScroll?: CarouselContainScroll
  /**
   * Ref of the resizable item callback.
   */
  controlRef?: RefObject<CarouselControl | null>
  /**
   * The initial index of the carousel slide.
   *
   * @default 0
   */
  defaultIndex?: number
  /**
   * The number for the autoplay interval of the carousel.
   *
   * @default 4000
   */
  delay?: number
  /**
   * If `true`, momentum scrolling will be enabled.
   *
   * @default false
   */
  dragFree?: boolean
  /**
   * If `true`, carousel can be scrolled with mouse and touch interactions.
   *
   * @default true
   */
  draggable?: boolean
  /**
   * Set scroll duration when triggered by any of the API methods.
   * Higher numbers enables slower scrolling.
   * Drag interactions are not affected because duration is then determined by the drag force.
   *
   * @default 25
   */
  duration?: number
  /**
   * The index of the carousel slide.
   */
  index?: number
  /**
   * Choose a fraction representing the percentage portion of a slide that needs to be visible in order to be considered in view.
   *
   * @default 0
   */
  inViewThreshold?: CarouselInViewThreshold
  /**
   * If `true`, infinite looping.
   * Automatically falls back to false if slide content isn't enough to loop.
   *
   * @default true
   */
  loop?: boolean
  /**
   * The orientation of the carousel.
   *
   * @default 'horizontal'
   */
  orientation?: Orientation
  /**
   * Embla plugins to use.
   */
  plugins?: CarouselPlugin[]
  /**
   * If `true`, allow the carousel to skip scroll snaps if it's dragged vigorously.
   * Note that this option will be ignored if the dragFree option is set to true.
   *
   * @default false
   */
  skipSnaps?: boolean
  /**
   * The number of slides that should be scrolled with next or previous buttons.
   *
   * @default 1
   */
  slidesToScroll?: number
  /**
   * If `true`, autoplay will pause when the mouse entries over.
   *
   * @default true
   */
  stopMouseEnterAutoplay?: boolean
  /**
   * Enables for scrolling the carousel with mouse and touch interactions.
   * Set this to `false` to disable drag events or pass a custom callback to add your own drag logic.
   *
   * @default true
   */
  watchDrag?: CarouselWatchDrag
  /**
   * Embla automatically watches the container and slides for size changes and runs `reInit` when any size has changed.
   * Set this to `false` to disable this behaviour or pass a custom callback to add your own resize logic.
   *
   * @default true
   */
  watchResize?: CarouselWatchResize
  /**
   * Embla automatically watches the container for added and/or removed slides and runs `reInit` if needed.
   * Set this to `false` to disable this behaviour or pass a custom callback to add your own slides changed logic.
   *
   * @default true
   */
  watchSlides?: CarouselWatchSlides
  /**
   * The callback invoked when carousel slide selected.
   */
  onChange?: (index: number) => void
  /**
   * A callback that return the current scroll amount when the carousel is scrolled.
   */
  onScrollProgress?: (progress: number) => void
}

export const useCarousel = ({
  id,
  align = "center",
  autoplay = false,
  containScroll = false,
  controlRef,
  defaultIndex = 0,
  delay = 4000,
  dragFree = false,
  draggable = true,
  duration = 25,
  index: indexProp,
  inViewThreshold = 0,
  loop = true,
  orientation = "horizontal",
  plugins = [],
  skipSnaps = false,
  slidesToScroll = 1,
  stopMouseEnterAutoplay = true,
  watchDrag = draggable,
  watchResize: watchResizeProp = true,
  watchSlides = true,
  onChange,
  onScrollProgress,
  ...rest
}: UseCarouselProps = {}) => {
  const [index, setIndex] = useControllableState({
    defaultValue: defaultIndex,
    value: indexProp,
    onChange,
  })
  const [rootId, listId] = useIds()
  const [hover, { off: onMouseLeave, on: onMouseEnter }] = useBoolean()
  const timeoutId = useRef<NodeJS.Timeout | null>(null)
  const indicatorMapRef = useRef<Map<number, HTMLButtonElement | null>>(
    new Map(),
  )
  const listRef = useRef<HTMLDivElement>(null)
  const horizontal = orientation === "horizontal"
  const axis = horizontal ? "x" : "y"
  const [snapCount, setSnapCount] = useState(0)
  const [count, setCount] = useState(0)
  const watchResize = useCallback<Extract<CarouselWatchResize, Function>>(
    (methods, entries) => {
      const result = isFunction(watchResizeProp)
        ? watchResizeProp(methods, entries)
        : true
      const snapCount = methods.scrollSnapList().length
      const count = methods.slideNodes().length

      setSnapCount(snapCount)
      setCount(count)

      return result
    },
    [watchResizeProp],
  )
  const [carouselRef, carousel] = useEmblaCarousel(
    {
      align,
      axis,
      container: listRef.current,
      containScroll,
      dragFree,
      duration,
      inViewThreshold,
      loop,
      skipSnaps,
      slidesToScroll,
      startIndex: defaultIndex,
      watchDrag,
      watchResize,
      watchSlides,
    },
    plugins,
  )

  id ??= rootId

  const onInit = useCallback((methods: CarouselControl) => {
    const snapCount = methods.scrollSnapList().length
    const count = methods.slideNodes().length

    setSnapCount(snapCount)
    setCount(count)
  }, [])

  const onScroll = useCallback(() => {
    if (!carousel) return

    const progress = Math.round(
      Math.max(0, Math.min(1, carousel.scrollProgress())) * 100,
    )

    onScrollProgress?.(progress)
  }, [carousel, onScrollProgress])

  const onSelect = useCallback(() => {
    if (!carousel) return

    const index = carousel.selectedScrollSnap()

    setIndex(index)
  }, [carousel, setIndex])

  const onFocusIndicator = useCallback(
    (index: number) => {
      const el = indicatorMapRef.current.get(index)

      el?.focus()
      carousel?.scrollTo(index)
    },
    [carousel],
  )

  const onKeyDown = useCallback(
    (index: number) => (ev: KeyboardEvent<HTMLButtonElement>) => {
      const lastIndex = snapCount - 1

      runKeyAction(ev, {
        ArrowDown: () => {
          if (horizontal) return

          index = index === lastIndex ? 0 : index + 1

          onFocusIndicator(index)
        },
        ArrowLeft: () => {
          if (!horizontal) return

          index = index === 0 ? lastIndex : index - 1

          onFocusIndicator(index)
        },
        ArrowRight: () => {
          if (!horizontal) return

          index = index === lastIndex ? 0 : index + 1

          onFocusIndicator(index)
        },
        ArrowUp: () => {
          if (horizontal) return

          index = index === 0 ? lastIndex : index - 1

          onFocusIndicator(index)
        },
        End: () => {
          onFocusIndicator(lastIndex)
        },
        Home: () => {
          onFocusIndicator(0)
        },
      })
    },
    [snapCount, horizontal, onFocusIndicator],
  )

  assignRef(controlRef, carousel)

  useEffect(() => {
    if (carousel) {
      carousel.on("reInit", onInit)
      carousel.on("select", onSelect)
      carousel.on("scroll", onScroll)

      onScroll()

      return () => {
        carousel.off("reInit", onInit)
        carousel.off("select", onSelect)
        carousel.off("scroll", onScroll)
      }
    }
  }, [carousel, onInit, onScroll, onSelect])

  useEffect(() => {
    const stop = hover && stopMouseEnterAutoplay
    const last = !carousel?.canScrollNext()

    if (carousel && autoplay && !stop && !last) {
      timeoutId.current = setInterval(() => {
        carousel.scrollNext()
      }, delay)
    } else {
      if (timeoutId.current) clearInterval(timeoutId.current)

      timeoutId.current = null
    }

    return () => {
      if (timeoutId.current) clearInterval(timeoutId.current)
    }
  }, [autoplay, carousel, delay, hover, stopMouseEnterAutoplay])

  useUpdateEffect(() => {
    if (!carousel) return

    if (indexProp === undefined) return

    carousel.scrollTo(indexProp)
  }, [indexProp])

  useUpdateEffect(() => {
    if (!carousel) return

    carousel.reInit()
  }, [
    carousel,
    count,
    align,
    axis,
    containScroll,
    dragFree,
    duration,
    inViewThreshold,
    loop,
    skipSnaps,
    slidesToScroll,
  ])

  const getRootProps: PropGetter<"section"> = useCallback(
    ({ ref, ...props } = {}) => ({
      id,
      "aria-roledescription": "carousel",
      "data-orientation": orientation,
      ...rest,
      ...props,
      ref: mergeRefs(ref, rest.ref, carouselRef),
      onMouseEnter: handlerAll(props.onMouseEnter, onMouseEnter),
      onMouseLeave: handlerAll(props.onMouseLeave, onMouseLeave),
    }),
    [id, onMouseEnter, onMouseLeave, rest, carouselRef, orientation],
  )

  const getListProps: PropGetter = useCallback(
    ({ ref, ...props } = {}) => ({
      id: listId,
      "aria-live": autoplay ? "off" : "polite",
      "data-orientation": orientation,
      ...props,
      ref: mergeRefs(ref, listRef),
    }),
    [autoplay, listId, orientation],
  )

  const getItemProps: RequiredPropGetter<"div", { index: number }> =
    useCallback(
      ({ index: indexProp, ...props }) => {
        const page = indexProp + 1
        const selected = index === indexProp

        return {
          id: `${listId}-${indexProp}`,
          "aria-label": `${page} of ${count}`,
          "aria-roledescription": "slide",
          "data-index": indexProp.toString(),
          "data-orientation": orientation,
          "data-selected": dataAttr(selected),
          role: "tabpanel",
          ...props,
        }
      },
      [index, listId, count, orientation],
    )

  const getPrevTriggerProps: PropGetter<"button"> = useCallback(
    (props = {}) => ({
      "aria-controls": listId,
      "aria-label": "Go to previous slide",
      "data-orientation": orientation,
      disabled: !carousel?.canScrollPrev(),
      ...props,
      onClick: handlerAll(props.onClick, () => carousel?.scrollPrev()),
    }),
    [carousel, listId, orientation],
  )

  const getNextTriggerProps: PropGetter<"button"> = useCallback(
    (props = {}) => ({
      "aria-controls": listId,
      "aria-label": "Go to next slide",
      "data-orientation": orientation,
      disabled: !carousel?.canScrollNext(),
      ...props,
      onClick: handlerAll(props.onClick, () => carousel?.scrollNext()),
    }),
    [carousel, listId, orientation],
  )

  const getIndicatorsProps: PropGetter = useCallback(
    (props = {}) => ({
      "aria-label": "Slides",
      "aria-orientation": orientation,
      role: "tablist",
      ...props,
    }),
    [orientation],
  )

  const getIndicatorProps: RequiredPropGetter<"button", { index: number }> =
    useCallback(
      ({ ref, index: indexProp, ...props }) => {
        const page = indexProp + 1
        const selected = index === indexProp

        return {
          type: "button" as const,
          "aria-controls": `${listId}-${indexProp}`,
          "aria-label": `Go to ${page} slide`,
          "aria-selected": selected,
          "data-index": indexProp.toString(),
          "data-orientation": orientation,
          "data-selected": dataAttr(selected),
          role: "tab",
          tabIndex: selected ? 0 : -1,
          ...props,
          ref: mergeRefs(ref, (node) => {
            indicatorMapRef.current.set(indexProp, node)
          }),
          onClick: handlerAll(props.onClick, () =>
            carousel?.scrollTo(indexProp),
          ),
          onKeyDown: handlerAll(props.onKeyDown, onKeyDown(indexProp)),
        }
      },
      [carousel, index, listId, orientation, onKeyDown],
    )

  return {
    carousel,
    count,
    index,
    setIndex,
    snapCount,
    getIndicatorProps,
    getIndicatorsProps,
    getItemProps,
    getListProps,
    getNextTriggerProps,
    getPrevTriggerProps,
    getRootProps,
  }
}

export type UseCarouselReturn = ReturnType<typeof useCarousel>
