import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel"
import type {
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEvent,
  RefObject,
} from "react"
import type {
  CSSUIObject,
  CSSUIProps,
  HTMLProps,
  HTMLUIProps,
  PropGetter,
  RequiredPropGetter,
} from "../../core"
import type { IconButtonProps } from "../button"
import useEmblaCarousel from "embla-carousel-react"
import {
  Children,
  createRef,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react"
import { layoutStyleProperties, mergeVars } from "../../core"
import { useControllableState } from "../../hooks/use-controllable-state"
import {
  assignRef,
  createContext,
  dataAttr,
  handlerAll,
  mergeRefs,
  splitObject,
  useUnmountEffect,
  useUpdateEffect,
} from "../../utils"

export type AlignmentOptionType = EmblaOptionsType["align"]
export type ScrollContainOptionType = EmblaOptionsType["containScroll"]
export type SlidesInViewOptionsType = EmblaOptionsType["inViewThreshold"]
export type DragHandlerOptionType = EmblaOptionsType["watchDrag"]
export type ResizeHandlerOptionType = EmblaOptionsType["watchResize"]
export type SlidesHandlerOptionType = EmblaOptionsType["watchSlides"]
export type CarouselControl = EmblaCarouselType

interface CarouselContext {
  id: string
  carousel: CarouselControl | undefined
  includeGapInSize: boolean
  indexes: number[]
  orientation: "horizontal" | "vertical"
  selectedIndex: number
  slidesToScroll: number
  styles: { [key: string]: CSSUIObject | undefined }
}

export const [CarouselProvider, useCarouselContext] =
  createContext<CarouselContext>({
    name: "CarouselContext",
    errorMessage: `useCarouselContext returned is 'undefined'. Seems you forgot to wrap the components in "<Carousel />"`,
  })

export interface UseCarouselProps
  extends Omit<HTMLUIProps, "draggable" | "gap" | "onChange"> {
  /**
   * The alignment of the carousel.
   *
   * @default 'center'
   */
  align?: AlignmentOptionType
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
  containScroll?: ScrollContainOptionType
  /**
   * Ref of the resizable item callback.
   */
  controlRef?: RefObject<CarouselControl | undefined>
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
   * The CSS `gap` property.
   *
   * @default '4'
   */
  gap?: CSSUIProps["gap"]
  /**
   * If `true`, gap will be treated as part of the carousel slide size.
   *
   * @default true
   */
  includeGapInSize?: boolean
  /**
   * The index of the carousel slide.
   */
  index?: number
  /**
   * Choose a fraction representing the percentage portion of a slide that needs to be visible in order to be considered in view.
   *
   * @default 0
   */
  inViewThreshold?: SlidesInViewOptionsType
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
  orientation?: "horizontal" | "vertical"
  /**
   * If `true`, allow the carousel to skip scroll snaps if it's dragged vigorously.
   * Note that this option will be ignored if the dragFree option is set to true.
   *
   * @default false
   */
  skipSnaps?: boolean
  /**
   * The carousel slide width.
   *
   * @default '100%'
   */
  slideSize?: CSSUIProps["width"]
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
  watchDrag?: DragHandlerOptionType
  /**
   * Embla automatically watches the container and slides for size changes and runs `reInit` when any size has changed.
   * Set this to `false` to disable this behaviour or pass a custom callback to add your own resize logic.
   *
   * @default true
   */
  watchResize?: ResizeHandlerOptionType
  /**
   * Embla automatically watches the container for added and/or removed slides and runs `reInit` if needed.
   * Set this to `false` to disable this behaviour or pass a custom callback to add your own slides changed logic.
   *
   * @default true
   */
  watchSlides?: SlidesHandlerOptionType
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
  children,
  containScroll = false,
  controlRef,
  defaultIndex = 0,
  delay = 4000,
  dragFree = false,
  draggable = true,
  duration = 25,
  includeGapInSize = true,
  index,
  inViewThreshold = 0,
  loop = true,
  orientation = "horizontal",
  skipSnaps = false,
  slideSize = "100%",
  slidesToScroll = 1,
  stopMouseEnterAutoplay = true,
  watchDrag = draggable,
  watchResize = true,
  watchSlides = true,
  onChange,
  onScrollProgress,
  ...rest
}: UseCarouselProps) => {
  const [
    { gap = "fallback(4, 1rem)", ...containerProps },
    { vars, ...slidesProps },
  ] = splitObject(rest, layoutStyleProperties)
  const [selectedIndex, setSelectedIndex] = useControllableState({
    defaultValue: defaultIndex,
    value: index,
    onChange,
  })
  const [indexes, setIndexes] = useState<number[]>([])
  const [mouseEnter, setMouseEnter] = useState<boolean>(false)
  const timeoutId = useRef<any>(undefined)
  const vertical = orientation === "vertical"
  const [carouselRef, carousel] = useEmblaCarousel(
    {
      align,
      axis: vertical ? "y" : "x",
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
    [],
  )
  const uuid = useId()

  id ??= uuid

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

    setSelectedIndex(index)
  }, [carousel, setSelectedIndex])

  useEffect(() => {
    const stop = mouseEnter && stopMouseEnterAutoplay
    const last = !carousel?.canScrollNext()

    if (carousel && autoplay && !stop && !last) {
      timeoutId.current = setInterval(() => {
        carousel.scrollNext()
      }, delay)
    } else {
      if (timeoutId.current) clearInterval(timeoutId.current)

      timeoutId.current = undefined
    }

    return () => {
      if (timeoutId.current) clearInterval(timeoutId.current)
    }
  }, [
    autoplay,
    delay,
    stopMouseEnterAutoplay,
    carousel,
    mouseEnter,
    loop,
    selectedIndex,
  ])

  useUpdateEffect(() => {
    if (!carousel) return

    carousel.reInit()

    const snapList = carousel.scrollSnapList()
    const indexes = snapList.map((_, i) => i)

    setIndexes(indexes)
  }, [
    Children.toArray(children).length,
    align,
    orientation,
    loop,
    duration,
    gap,
    slidesToScroll,
    draggable,
    dragFree,
    inViewThreshold,
    skipSnaps,
    containScroll,
    slideSize,
    includeGapInSize,
  ])

  useUpdateEffect(() => {
    if (!carousel) return

    const snapList = carousel.scrollSnapList()
    const indexes = snapList.map((_, i) => i)

    setIndexes(indexes)
  }, [carousel])

  useUpdateEffect(() => {
    if (carousel) {
      carousel.on("select", onSelect)
      carousel.on("scroll", onScroll)

      onScroll()

      return () => {
        carousel.off("select", onSelect)
        carousel.off("scroll", onScroll)
      }
    }
  }, [carousel, onScroll])

  useUpdateEffect(() => {
    if (!carousel) return

    if (index === undefined) return

    carousel.scrollTo(index)
  }, [index])

  assignRef(controlRef, carousel)

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      "aria-roledescription": "carousel",
      ...containerProps,
      ...props,
      ref,
      vars: mergeVars(vars, [
        { name: "gap", token: "spaces", value: gap },
        { name: "slideSize", token: "sizes", value: slideSize },
      ]),
      onMouseEnter: handlerAll(props.onMouseEnter, () => {
        setMouseEnter(true)
      }),
      onMouseLeave: handlerAll(props.onMouseLeave, () => {
        setMouseEnter(false)
      }),
    }),
    [containerProps, gap, slideSize, vars],
  )

  const getSlidesProps: PropGetter = useCallback(
    (props = {}) => ({
      id,
      "aria-live": autoplay ? "off" : "polite",
      ...slidesProps,
      ...props,
      ref: carouselRef,
    }),
    [slidesProps, id, carouselRef, autoplay],
  )

  return {
    id,
    carousel,
    children,
    includeGapInSize,
    indexes,
    orientation,
    selectedIndex,
    slidesToScroll,
    getContainerProps,
    getSlidesProps,
  }
}

export type UseCarouselReturn = ReturnType<typeof useCarousel>

export interface UseCarouselSlideProps {
  index?: number
}

export const useCarouselSlide = ({ index }: UseCarouselSlideProps) => {
  const { id, indexes, selectedIndex, slidesToScroll } = useCarouselContext()

  index = Math.floor((index ?? 0) / slidesToScroll)

  const totalSlides = indexes.length
  const selected = index === selectedIndex

  const getSlideProps: PropGetter = useCallback(
    (props = {}) => ({
      id: `${id}-${index + 1}`,
      "aria-label": `${index + 1} of ${totalSlides}`,
      "aria-roledescription": "slide",
      "data-index": index,
      "data-selected": dataAttr(selected),
      role: "tabpanel",
      ...props,
    }),
    [id, index, selected, totalSlides],
  )

  return { getSlideProps }
}

export type UseCarouselSlideReturn = ReturnType<typeof useCarouselSlide>

export interface UseCarouselControlProps extends IconButtonProps {
  operation: "next" | "prev"
}

export const useCarouselControl = ({
  disabled: disabledProp,
  operation,
}: UseCarouselControlProps) => {
  const { id, carousel } = useCarouselContext()

  const prev = operation === "prev"

  const disabled =
    disabledProp ??
    (prev ? !carousel?.canScrollPrev() : !carousel?.canScrollNext())

  const onClick = useCallback(() => {
    if (!carousel) return

    if (prev) {
      carousel.scrollPrev()
    } else {
      carousel.scrollNext()
    }
  }, [carousel, prev])

  const getControlProps: PropGetter<"button"> = useCallback(
    (props = {}, ref = null) => ({
      "aria-controls": id,
      "aria-label": `Go to ${prev ? "previous" : "next"} slide`,
      ...props,
      ref,
      disabled,
      onClick: handlerAll(props.onClick, onClick),
    }),
    [disabled, id, onClick, prev],
  )

  return { getControlProps }
}

export type UseCarouselControlReturn = ReturnType<typeof useCarouselControl>

export const useCarouselIndicators = () => {
  const { id, carousel, indexes, orientation, selectedIndex } =
    useCarouselContext()
  const refMap = useRef<Map<number, RefObject<HTMLButtonElement | null>>>(
    new Map(),
  )
  const vertical = orientation === "vertical"

  const onSelect = useCallback(
    (index: number) => {
      const ref = refMap.current.get(index)

      ref?.current?.focus()
      carousel?.scrollTo(index)
    },
    [carousel],
  )

  const onClick = useCallback(
    (index: number) => (ev: MouseEvent) => {
      ev.stopPropagation()

      carousel?.scrollTo(index)
    },
    [carousel],
  )

  const onKeyDown = useCallback(
    (index: number) => (ev: KeyboardEvent) => {
      const lastIndex = indexes.length - 1

      const actions: { [key: string]: KeyboardEventHandler } = {
        ArrowDown: () => {
          if (!vertical) return

          if (index === lastIndex) {
            index = 0
          } else {
            index += 1
          }

          onSelect(index)
        },
        ArrowLeft: () => {
          if (vertical) return

          if (index === 0) {
            index = lastIndex
          } else {
            index -= 1
          }

          onSelect(index)
        },
        ArrowRight: () => {
          if (vertical) return

          if (index === lastIndex) {
            index = 0
          } else {
            index += 1
          }

          onSelect(index)
        },
        ArrowUp: () => {
          if (!vertical) return

          if (index === 0) {
            index = lastIndex
          } else {
            index -= 1
          }

          onSelect(index)
        },
        End: () => onSelect(lastIndex),
        Home: () => onSelect(0),
      }

      const action = actions[ev.key]

      if (!action) return

      ev.preventDefault()
      action(ev)
    },
    [indexes, onSelect, vertical],
  )

  useUnmountEffect(() => {
    refMap.current.clear()
  })

  const getIndicatorsProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      "aria-label": "Sliders",
      "aria-orientation": orientation,
      role: "tablist",
      ...props,
      ref,
    }),
    [orientation],
  )

  const getIndicatorProps: RequiredPropGetter<
    { index: number } & HTMLProps<"button">,
    HTMLProps<"button">
  > = useCallback(
    ({ index, ...props }, ref) => {
      const selected = index === selectedIndex
      const internalRef = createRef<HTMLButtonElement>()

      refMap.current.set(index, internalRef)

      return {
        ref: mergeRefs(ref, internalRef),
        "aria-controls": `${id}-${index + 1}`,
        "aria-label": `Go to ${index + 1} slide`,
        "aria-selected": selected,
        "data-index": index,
        "data-selected": dataAttr(selected),
        role: "tab",
        tabIndex: selected ? 0 : -1,
        ...props,
        key: index,
        onClick: handlerAll(props.onClick, onClick(index)),
        onKeyDown: handlerAll(props.onKeyDown, onKeyDown(index)),
      }
    },
    [onClick, onKeyDown, selectedIndex, id],
  )

  return { indexes, getIndicatorProps, getIndicatorsProps }
}

export type UseCarouselIndicatorsReturn = ReturnType<
  typeof useCarouselIndicators
>
