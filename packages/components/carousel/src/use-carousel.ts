import type { IconButtonProps } from "@yamada-ui/button"
import type {
  CSSUIObject,
  HTMLUIProps,
  CSSUIProps,
  UIPropGetter,
  RequiredUIPropGetter,
} from "@yamada-ui/core"
import { layoutStyleProperties } from "@yamada-ui/core"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import {
  assignRef,
  createContext,
  dataAttr,
  handlerAll,
  splitObject,
  useUpdateEffect,
} from "@yamada-ui/utils"
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import type { MouseEvent, RefObject } from "react"
import { Children, useCallback, useEffect, useRef, useState } from "react"

export type AlignmentOptionType = EmblaOptionsType["align"]
export type ScrollContainOptionType = EmblaOptionsType["containScroll"]
export type SlidesInViewOptionsType = EmblaOptionsType["inViewThreshold"]
export type DragHandlerOptionType = EmblaOptionsType["watchDrag"]
export type ResizeHandlerOptionType = EmblaOptionsType["watchResize"]
export type SlidesHandlerOptionType = EmblaOptionsType["watchSlides"]
export type CarouselControl = EmblaCarouselType

type CarouselContext = {
  carousel: CarouselControl | undefined
  indexes: number[]
  selectedIndex: number
  orientation: "vertical" | "horizontal"
  includeGapInSize: boolean
  slidesToScroll: number
  slideSize: string | number
  gap: CSSUIProps["gap"]
  styles: Record<string, CSSUIObject>
}

export const [CarouselProvider, useCarouselContext] =
  createContext<CarouselContext>({
    name: "CarouselContext",
    errorMessage: `useCarouselContext returned is 'undefined'. Seems you forgot to wrap the components in "<Carousel />"`,
  })

export type UseCarouselProps = Omit<
  HTMLUIProps<"div">,
  "onChange" | "draggable" | "gap"
> & {
  /**
   * The index of the carousel slide.
   */
  index?: number
  /**
   * The initial index of the carousel slide.
   *
   * @default 0
   */
  defaultIndex?: number
  /**
   * The callback invoked when carousel slide selected.
   */
  onChange?: (index: number) => void
  /**
   * The orientation of the carousel.
   *
   * @default 'horizontal'
   */
  orientation?: "vertical" | "horizontal"
  /**
   * The alignment of the carousel.
   *
   * @default 'center'
   */
  align?: AlignmentOptionType
  /**
   * Clear leading and trailing empty space that causes excessive scrolling.
   * Use trimSnaps to only use snap points that trigger scrolling or keepSnaps to keep them.
   *
   * @default false
   */
  containScroll?: ScrollContainOptionType
  /**
   * The number of slides that should be scrolled with next or previous buttons.
   *
   * @default 1
   */
  slidesToScroll?: number
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
   * If `true`, allow the carousel to skip scroll snaps if it's dragged vigorously.
   * Note that this option will be ignored if the dragFree option is set to true.
   *
   * @default false
   */
  skipSnaps?: boolean
  /**
   * Set scroll duration when triggered by any of the API methods.
   * Higher numbers enables slower scrolling.
   * Drag interactions are not affected because duration is then determined by the drag force.
   *
   * @default 25
   */
  duration?: number
  /**
   * The number for the autoplay interval of the carousel.
   *
   * @default 4000
   */
  delay?: number
  /**
   * If `true`, the carousel will be autoplay.
   *
   * @default false
   */
  autoplay?: boolean
  /**
   * If `true`, autoplay will pause when the mouse entries over.
   *
   * @default true
   */
  stopMouseEnterAutoplay?: boolean
  /**
   * If `true`, gap will be treated as part of the carousel slide size.
   *
   * @default true
   */
  includeGapInSize?: boolean
  /**
   * The CSS `gap` property.
   *
   * @default '4'
   */
  gap?: CSSUIProps["gap"]
  /**
   * The carousel slide width.
   *
   * @default '100%'
   */
  slideSize?: string | number
  /**
   * A callback that return the current scroll amount when the carousel is scrolled.
   */
  onScrollProgress?: (progress: number) => void
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
   * Ref of the resizable item callback.
   */
  controlRef?: RefObject<CarouselControl | undefined>
}

export const useCarousel = ({
  index,
  defaultIndex = 0,
  onChange,
  align = "center",
  orientation = "horizontal",
  autoplay = false,
  stopMouseEnterAutoplay = true,
  loop = true,
  duration = 25,
  delay = 4000,
  slidesToScroll = 1,
  draggable = true,
  dragFree = false,
  inViewThreshold = 0,
  skipSnaps = false,
  containScroll = false,
  slideSize = "100%",
  includeGapInSize = true,
  onScrollProgress,
  watchDrag = draggable,
  watchResize,
  watchSlides,
  controlRef,
  children,
  ...rest
}: UseCarouselProps) => {
  const [{ gap = "fallback(4, 1rem)", ...containerProps }, slidesProps] =
    splitObject(rest, layoutStyleProperties)

  const [selectedIndex, setSelectedIndex] = useControllableState({
    value: index,
    defaultValue: defaultIndex,
    onChange,
  })

  const isVertical = orientation === "vertical"

  const [carouselRef, carousel] = useEmblaCarousel(
    {
      axis: isVertical ? "y" : "x",
      startIndex: defaultIndex,
      loop,
      align,
      slidesToScroll,
      duration,
      dragFree,
      inViewThreshold,
      skipSnaps,
      containScroll,
      watchDrag,
      watchResize,
      watchSlides,
    },
    [],
  )

  assignRef(controlRef, carousel)

  const [indexes, setIndexes] = useState<number[]>([])
  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false)

  const timeoutId = useRef<any>(undefined)

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
    const isStop = isMouseEnter && stopMouseEnterAutoplay
    const isLast = !carousel?.canScrollNext()

    if (carousel && autoplay && !isStop && !isLast) {
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
    isMouseEnter,
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

  const getContainerProps: UIPropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...containerProps,
      ...props,
      ref,
      onMouseEnter: handlerAll(props.onMouseEnter, () => {
        setIsMouseEnter(true)
      }),
      onMouseLeave: handlerAll(props.onMouseLeave, () => {
        setIsMouseEnter(false)
      }),
    }),
    [containerProps],
  )

  const getSlidesProps: UIPropGetter = useCallback(
    (props = {}) => ({
      ...slidesProps,
      ...props,
      ref: carouselRef,
    }),
    [slidesProps, carouselRef],
  )

  return {
    carousel,
    children,
    indexes,
    selectedIndex,
    orientation,
    slideSize,
    gap,
    slidesToScroll,
    includeGapInSize,
    getContainerProps,
    getSlidesProps,
  }
}

export type UseCarouselReturn = ReturnType<typeof useCarousel>

export type UseCarouselSlideProps = {
  index?: number
}

export const useCarouselSlide = ({ index }: UseCarouselSlideProps) => {
  const { selectedIndex, slidesToScroll } = useCarouselContext()

  index = Math.floor((index ?? 0) / (slidesToScroll ?? 1))

  const isSelected = index === selectedIndex

  const getSlideProps: UIPropGetter = useCallback(
    (props = {}) => ({
      ...props,
      "data-index": index,
      "data-selected": dataAttr(isSelected),
    }),
    [isSelected, index],
  )

  return { getSlideProps }
}

export type UseCarouselSlideReturn = ReturnType<typeof useCarouselSlide>

export type UseCarouselControlProps = IconButtonProps & {
  operation: "prev" | "next"
}

export const useCarouselControl = ({
  operation,
  ...rest
}: UseCarouselControlProps) => {
  const { carousel } = useCarouselContext()

  const isPrev = operation === "prev"

  const disabled =
    rest.disabled ??
    rest.isDisabled ??
    (isPrev ? !carousel?.canScrollPrev() : !carousel?.canScrollNext())

  const onClick = useCallback(() => {
    if (!carousel) return

    if (isPrev) {
      carousel.scrollPrev()
    } else {
      carousel.scrollNext()
    }
  }, [carousel, isPrev])

  const getControlProps: UIPropGetter<"button"> = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ref,
      disabled,
      onClick: handlerAll(props.onClick, onClick),
    }),
    [disabled, onClick],
  )

  return { getControlProps }
}

export type UseCarouselControlReturn = ReturnType<typeof useCarouselControl>

export const useCarouselIndicators = () => {
  const { selectedIndex, carousel, indexes } = useCarouselContext()

  const onClick = useCallback(
    (ev: MouseEvent, index: number) => {
      if (!carousel) return

      ev.stopPropagation()

      carousel.scrollTo(index)
    },
    [carousel],
  )

  const getIndicatorProps: RequiredUIPropGetter<"button", { index: number }> =
    useCallback(
      ({ index, ...props }) => {
        const isSelected = index === selectedIndex

        return {
          "aria-label": `Go to ${index + 1} slide`,
          ...props,
          key: index,
          "data-index": index,
          "data-selected": dataAttr(isSelected),
          onClick: handlerAll(props.onClick, (ev) => onClick(ev, index)),
        }
      },
      [onClick, selectedIndex],
    )

  return { indexes, getIndicatorProps }
}

export type UseCarouselIndicatorsReturn = ReturnType<
  typeof useCarouselIndicators
>
