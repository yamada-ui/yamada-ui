"use client"

import type { ReactNode } from "react"
import type {
  CSSProps,
  HTMLProps,
  HTMLStyledProps,
  Orientation,
  StyleValue,
  ThemeProps,
} from "../../core"
import type { IconButtonProps } from "../icon-button"
import type { CarouselStyle } from "./carousel.style"
import type {
  CarouselAlign,
  CarouselContainScroll,
  CarouselInViewThreshold,
  UseCarouselProps,
} from "./use-carousel"
import { cloneElement, isValidElement, useMemo } from "react"
import { createSlotComponent, styled, varAttr } from "../../core"
import { useValue } from "../../hooks/use-value"
import { dataAttr } from "../../utils"
import { ChevronLeftIcon, ChevronRightIcon } from "../icon"
import { IconButton } from "../icon-button"
import { carouselStyle } from "./carousel.style"
import {
  CarouselContext,
  useCarousel,
  useCarouselContext,
} from "./use-carousel"

interface ComponentContext
  extends Pick<CarouselRootProps, "includeGapInSize"> {}

export interface CarouselRootProps
  extends Omit<HTMLStyledProps<"section">, "draggable" | "onChange">,
    Omit<
      UseCarouselProps,
      | "align"
      | "autoplay"
      | "containScroll"
      | "delay"
      | "dragFree"
      | "draggable"
      | "duration"
      | "inViewThreshold"
      | "loop"
      | "orientation"
      | "skipSnaps"
      | "slidesToScroll"
      | "stopMouseEnterAutoplay"
    >,
    ThemeProps<CarouselStyle> {
  /**
   * The alignment of the carousel.
   *
   * @default 'center'
   */
  align?: StyleValue<CarouselAlign>
  /**
   * If `true`, the carousel will be autoplay.
   *
   * @default false
   */
  autoplay?: StyleValue<boolean>
  /**
   * Clear leading and trailing empty space that causes excessive scrolling.
   * Use trimSnaps to only use snap points that trigger scrolling or keepSnaps to keep them.
   *
   * @default false
   */
  containScroll?: StyleValue<CarouselContainScroll>
  /**
   * The number for the autoplay interval of the carousel.
   *
   * @default 4000
   */
  delay?: StyleValue<number>
  /**
   * If `true`, momentum scrolling will be enabled.
   *
   * @default false
   */
  dragFree?: StyleValue<boolean>
  /**
   * If `true`, carousel can be scrolled with mouse and touch interactions.
   *
   * @default true
   */
  draggable?: StyleValue<boolean>
  /**
   * Set scroll duration when triggered by any of the API methods.
   * Higher numbers enables slower scrolling.
   * Drag interactions are not affected because duration is then determined by the drag force.
   *
   * @default 25
   */
  duration?: StyleValue<number>
  /**
   * If `true`, gap will be treated as part of the carousel slide size.
   *
   * @default true
   */
  includeGapInSize?: boolean
  /**
   * Choose a fraction representing the percentage portion of a slide that needs to be visible in order to be considered in view.
   *
   * @default 0
   */
  inViewThreshold?: StyleValue<CarouselInViewThreshold>
  /**
   * If `true`, infinite looping.
   * Automatically falls back to false if slide content isn't enough to loop.
   *
   * @default true
   */
  loop?: StyleValue<boolean>
  /**
   * The orientation of the carousel.
   *
   * @default 'horizontal'
   */
  orientation?: StyleValue<Orientation>
  /**
   * If `true`, allow the carousel to skip scroll snaps if it's dragged vigorously.
   * Note that this option will be ignored if the dragFree option is set to true.
   *
   * @default false
   */
  skipSnaps?: StyleValue<boolean>
  /**
   * The size of the carousel item.
   */
  slideSize?: CSSProps["width"]
  /**
   * The number of slides that should be scrolled with next or previous buttons.
   *
   * @default 1
   */
  slidesToScroll?: StyleValue<number>
  /**
   * If `true`, autoplay will pause when the mouse entries over.
   *
   * @default true
   */
  stopMouseEnterAutoplay?: StyleValue<boolean>
}

export const {
  ComponentContext,
  PropsContext: CarouselPropsContext,
  useComponentContext,
  usePropsContext: useCarouselPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<CarouselRootProps, CarouselStyle>(
  "carousel",
  carouselStyle,
)

/**
 * `Carousel` is a component that displays multiple elements like a slideshow.
 *
 * @see https://yamada-ui.com/components/carousel
 */
export const CarouselRoot = withProvider<"section", CarouselRootProps>(
  ({ includeGapInSize = true, ...rest }) => {
    const align = useValue(rest.align)
    const autoplay = useValue(rest.autoplay)
    const containScroll = useValue(rest.containScroll)
    const delay = useValue(rest.delay)
    const dragFree = useValue(rest.dragFree)
    const draggable = useValue(rest.draggable)
    const duration = useValue(rest.duration)
    const inViewThreshold = useValue(rest.inViewThreshold)
    const loop = useValue(rest.loop)
    const orientation = useValue(rest.orientation)
    const skipSnaps = useValue(rest.skipSnaps)
    const slidesToScroll = useValue(rest.slidesToScroll)
    const stopMouseEnterAutoplay = useValue(rest.stopMouseEnterAutoplay)
    const {
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
    } = useCarousel({
      ...rest,
      align,
      autoplay,
      containScroll,
      delay,
      dragFree,
      draggable,
      duration,
      inViewThreshold,
      loop,
      orientation,
      skipSnaps,
      slidesToScroll,
      stopMouseEnterAutoplay,
    })
    const componentContext = useMemo(
      () => ({ includeGapInSize }),
      [includeGapInSize],
    )
    const carouselContext = useMemo(
      () => ({
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
      }),
      [
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
      ],
    )

    return (
      <CarouselContext value={carouselContext}>
        <ComponentContext value={componentContext}>
          <styled.section {...getRootProps()} />
        </ComponentContext>
      </CarouselContext>
    )
  },
  "root",
)(undefined, ({ gap, slideSize, ...rest }) => {
  return {
    ...rest,
    "--slide-gap": varAttr(gap, "spaces"),
    "--slide-size": varAttr(slideSize, "sizes"),
  }
})

export interface CarouselListProps extends HTMLStyledProps {}

export const CarouselList = withContext<"div", CarouselListProps>(
  "div",
  "list",
)(undefined, (props) => {
  const { includeGapInSize } = useComponentContext()
  const { getListProps } = useCarouselContext()

  return {
    "data-include-gap-in-size": dataAttr(includeGapInSize),
    ...getListProps(props),
  }
})

export interface CarouselItemProps extends HTMLStyledProps {
  /**
   * The index of the carousel item.
   */
  index: number
  /**
   * The size of the carousel item.
   */
  slideSize?: CSSProps["width"]
}

export const CarouselItem = withContext<"div", CarouselItemProps>(
  "div",
  "item",
)(undefined, ({ slideSize, ...rest }) => {
  const { includeGapInSize } = useComponentContext()
  const { getItemProps } = useCarouselContext()

  return {
    "data-include-gap-in-size": dataAttr(includeGapInSize),
    "--slide-size": varAttr(slideSize, "sizes"),
    ...getItemProps(rest),
  }
})

export interface CarouselPrevTriggerProps extends IconButtonProps {}

export const CarouselPrevTrigger = withContext<
  "button",
  CarouselPrevTriggerProps
>(IconButton, { name: "PrevTrigger", slot: ["trigger", "prev"] })(
  undefined,
  (props) => {
    const { getPrevTriggerProps } = useCarouselContext()

    return {
      fullRounded: true,
      icon: <ChevronLeftIcon />,
      ...getPrevTriggerProps(props),
    }
  },
)

export interface CarouselNextTriggerProps extends IconButtonProps {}

export const CarouselNextTrigger = withContext<
  "button",
  CarouselNextTriggerProps
>(IconButton, { name: "NextTrigger", slot: ["trigger", "next"] })(
  undefined,
  (props) => {
    const { getNextTriggerProps } = useCarouselContext()

    return {
      fullRounded: true,
      icon: <ChevronRightIcon />,
      ...getNextTriggerProps(props),
    }
  },
)

export interface CarouselIndicatorsProps extends HTMLStyledProps {
  /**
   * The function used to generate children.
   * it will be called with `{ index: number; selected: boolean }`.
   */
  render?: (props: { index: number; selected: boolean }) => ReactNode
}

export const CarouselIndicators = withContext<"div", CarouselIndicatorsProps>(
  "div",
  "indicators",
)(undefined, ({ children, render, ...rest }) => {
  const {
    index: selectedIndex,
    snapCount,
    getIndicatorProps,
    getIndicatorsProps,
  } = useCarouselContext()
  const computedChildren = useMemo(() => {
    if (children) {
      return children
    } else {
      return Array.from({ length: snapCount }, (_, index) => {
        if (render) {
          const component = render({ index, selected: index === selectedIndex })

          if (isValidElement<HTMLProps<"button">>(component)) {
            return cloneElement(component, {
              ...getIndicatorProps({ key: index, index }),
            })
          } else {
            return component
          }
        } else {
          return <CarouselIndicator key={index} index={index} />
        }
      })
    }
  }, [children, getIndicatorProps, render, selectedIndex, snapCount])

  return {
    children: computedChildren,
    ...getIndicatorsProps(rest),
  }
})

export interface CarouselIndicatorProps extends HTMLStyledProps<"button"> {
  /**
   * The index of the carousel indicator.
   */
  index: number
}

export const CarouselIndicator = withContext<"button", CarouselIndicatorProps>(
  "button",
  "indicator",
)(undefined, (props) => {
  const { getIndicatorProps } = useCarouselContext()

  return getIndicatorProps(props)
})
