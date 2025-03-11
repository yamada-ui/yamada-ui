import type { ReactElement } from "react"
import type {
  CSSProps,
  FC,
  HTMLUIProps,
  StyleValue,
  ThemeProps,
} from "../../core"
import type { IconButtonProps } from "../icon-button"
import type { CarouselStyle } from "./carousel.style"
import type {
  AlignmentOptionType,
  CarouselControl,
  ScrollContainOptionType,
  SlidesInViewOptionsType,
  UseCarouselProps,
  UseCarouselSlideProps,
} from "./use-carousel"
import { cloneElement } from "react"
import { createSlotComponent, mergeCSS, ui } from "../../core"
import { useValue } from "../../hooks/use-value"
import {
  cx,
  filterUndefined,
  findChild,
  getValidChildren,
  omitChildren,
  pickChildren,
} from "../../utils"
import { ChevronLeftIcon, ChevronRightIcon } from "../icon"
import { IconButton } from "../icon-button"
import { carouselStyle } from "./carousel.style"
import {
  useCarousel,
  useCarouselControl,
  useCarouselIndicators,
  useCarouselSlide,
} from "./use-carousel"

export interface CarouselRootProps
  extends ThemeProps<CarouselStyle>,
    Omit<HTMLUIProps, "draggable" | "onChange">,
    Pick<
      UseCarouselProps,
      | "controlRef"
      | "defaultIndex"
      | "index"
      | "onChange"
      | "onScrollProgress"
      | "watchDrag"
      | "watchResize"
      | "watchSlides"
    > {
  /**
   * The alignment of the carousel.
   *
   * @default 'center'
   */
  align?: StyleValue<AlignmentOptionType>
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
   * @default ''
   */
  containScroll?: StyleValue<ScrollContainOptionType>
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
  includeGapInSize?: StyleValue<boolean>
  /**
   * Choose a fraction representing the percentage portion of a slide that needs to be visible in order to be considered in view.
   *
   * @default 0
   */
  inViewThreshold?: StyleValue<SlidesInViewOptionsType>
  /**
   * If `true`, infinite looping.
   * Automatically falls back to false if slide content isn't enough to loop.
   *
   * @default true
   */
  loop?: StyleValue<boolean>
  /**
   * If `true`, allow the carousel to skip scroll snaps if it's dragged vigorously.
   * Note that this option will be ignored if the dragFree option is set to true.
   *
   * @default false
   */
  skipSnaps?: StyleValue<boolean>
  /**
   * The CSS `width` property.
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
  /**
   * If `true`, display the carousel control buttons.
   *
   * @default true
   */
  withControls?: StyleValue<boolean>
  /**
   * If `true`, display the carousel indicator buttons.
   *
   * @default true
   */
  withIndicators?: StyleValue<boolean>
  /**
   * Props for next of the carousel control element.
   */
  controlNextProps?: CarouselControlProps
  /**
   * Props for previous of the carousel control element.
   */
  controlPrevProps?: CarouselControlProps
  /**
   * Props for carousel control element.
   */
  controlProps?: CarouselControlProps
  /**
   * Props for carousel indicators element.
   */
  indicatorsProps?: CarouselIndicatorsProps
  /**
   * Props for carousel inner element.
   */
  innerProps?: HTMLUIProps
}

interface CarouselContext {
  id: string
  carousel: CarouselControl | undefined
  includeGapInSize: boolean
  indexes: number[]
  orientation: "horizontal" | "vertical"
  selectedIndex: number
  slidesToScroll: number
}

export const {
  ComponentContext: CarouselContext,
  PropsContext: CarouselPropsContext,
  useComponentContext: useCarouselContext,
  usePropsContext: useCarouselPropsContext,
  useStyleContext,
  withContext,
  withProvider,
} = createSlotComponent<CarouselRootProps, CarouselStyle, CarouselContext>(
  "carousel",
  carouselStyle,
)

/**
 * `Carousel` is a component that displays multiple elements like a slideshow.
 *
 * @see Docs https://yamada-ui.com/components/carousel
 */
export const CarouselRoot: FC<CarouselRootProps> = withProvider(
  ({
    h,
    height = h,
    minH,
    minHeight = minH,
    withControls = true,
    withIndicators = true,
    controlNextProps,
    controlPrevProps,
    controlProps,
    indicatorsProps,
    innerProps,
    ...props
  }) => {
    const orientation = useValue(props.orientation)
    const align = useValue(props.align)
    const autoplay = useValue(props.autoplay)
    const stopMouseEnterAutoplay = useValue(props.stopMouseEnterAutoplay)
    const loop = useValue(props.loop)
    const duration = useValue(props.duration)
    const delay = useValue(props.delay)
    const slidesToScroll = useValue(props.slidesToScroll)
    const draggable = useValue(props.draggable)
    const dragFree = useValue(props.dragFree)
    const inViewThreshold = useValue(props.inViewThreshold)
    const skipSnaps = useValue(props.skipSnaps)
    const containScroll = useValue(props.containScroll)
    const includeGapInSize = useValue(props.includeGapInSize)
    const computedWithControls = useValue(withControls)
    const computedWithIndicators = useValue(withIndicators)

    const { id, children, getRootProps, getSlidesProps, ...rest } = useCarousel(
      {
        ...props,
        align,
        autoplay,
        containScroll,
        delay,
        dragFree,
        draggable,
        duration,
        includeGapInSize,
        inViewThreshold,
        loop,
        orientation,
        skipSnaps,
        slidesToScroll,
        stopMouseEnterAutoplay,
      },
    )

    const validChildren = getValidChildren(children)
    const customCarouselControlPrev = findChild(
      validChildren,
      CarouselControlPrev,
    )
    const customCarouselControlNext = findChild(
      validChildren,
      CarouselControlNext,
    )
    const customCarouselIndicators = findChild(
      validChildren,
      CarouselIndicators,
    )
    const slideChildren = pickChildren(validChildren, CarouselSlide)
    const otherChildren = omitChildren(
      validChildren,
      CarouselControlPrev,
      CarouselControlNext,
      CarouselIndicators,
      CarouselSlide,
    )
    const cloneSlideChildren = slideChildren.map((child, index) =>
      cloneElement<any>(child, { index }),
    )

    return (
      <CarouselContext value={{ id, ...rest }}>
        <ui.section {...getRootProps()}>
          {customCarouselControlPrev ??
            (computedWithControls ? (
              <CarouselControlPrev {...controlProps} {...controlPrevProps} />
            ) : null)}
          {customCarouselControlNext ??
            (computedWithControls ? (
              <CarouselControlNext {...controlProps} {...controlNextProps} />
            ) : null)}

          <CarouselSlides
            {...getSlidesProps({
              ...filterUndefined({ height, minHeight }),
              ...innerProps,
            })}
          >
            {cloneSlideChildren}
          </CarouselSlides>

          {customCarouselIndicators ??
            (computedWithIndicators ? (
              <CarouselIndicators {...indicatorsProps} />
            ) : null)}

          {otherChildren}
        </ui.section>
      </CarouselContext>
    )
  },
  "root",
  { transferProps: ["orientation"] },
)()

interface CarouselSlidesProps extends HTMLUIProps {}

const CarouselSlides = withContext<"div", CarouselSlidesProps>(
  ({ ref, className, css, ...rest }) => (
    <ui.div ref={ref} className={className} css={css}>
      <CarouselSlidesInner {...rest} />
    </ui.div>
  ),
  "slides",
)()

interface CarouselSlidesInnerProps extends HTMLUIProps {}

const CarouselSlidesInner = withContext<"div", CarouselSlidesInnerProps>(
  "div",
  "inner",
)(undefined, ({ css: cssProp, ...rest }) => {
  const { includeGapInSize, orientation } = useCarouselContext()

  const css = mergeCSS(cssProp, {
    ...(includeGapInSize
      ? {
          [orientation === "vertical" ? "mb" : "mr"]: "calc({gap} * -1)",
        }
      : {}),
  })

  return { css, ...rest }
})

export interface CarouselControlProps
  extends Omit<IconButtonProps, "aria-label"> {
  /**
   * The label for the button.
   */
  "aria-label"?: string
}

export const CarouselControlPrev: FC<CarouselControlProps> = ({
  className,
  ...rest
}) => {
  const { orientation } = useCarouselContext()

  return (
    <CarouselControl
      className={cx("ui-carousel__control--prev", className)}
      icon={
        <ChevronLeftIcon
          transform={
            orientation === "vertical" ? "rotate(90deg)" : "rotate(0deg)"
          }
        />
      }
      operation="prev"
      {...rest}
    />
  )
}

CarouselControlPrev.displayName = "CarouselControlPrev"
CarouselControlPrev.__ui__ = "CarouselControlPrev"

export const CarouselControlNext: FC<CarouselControlProps> = ({
  className,
  ...rest
}) => {
  const { orientation } = useCarouselContext()

  return (
    <CarouselControl
      className={cx("ui-carousel__control--next", className)}
      icon={
        <ChevronRightIcon
          transform={
            orientation === "vertical" ? "rotate(90deg)" : "rotate(0deg)"
          }
        />
      }
      operation="next"
      {...rest}
    />
  )
}

CarouselControlNext.displayName = "CarouselControlNext"
CarouselControlNext.__ui__ = "CarouselControlNext"

const CarouselControl = withContext<
  "button",
  CarouselControlProps & { operation: "next" | "prev" }
>(({ css, operation, ...rest }) => {
  const styles = useStyleContext()
  const { getControlProps } = useCarouselControl({ operation })

  return (
    <IconButton
      css={mergeCSS(css, styles[operation])}
      bg={["whiteAlpha.400", "blackAlpha.400"]}
      fullRounded
      {...getControlProps(rest)}
    />
  )
}, "control")()

export interface CarouselIndicatorsProps extends HTMLUIProps {
  /**
   * The custom carousel indicator to use.
   */
  component?: FC<{
    index: number
    selected: boolean
  }>
}

export const CarouselIndicators = withContext<"div", CarouselIndicatorsProps>(
  ({ component, ...rest }) => {
    const { selectedIndex } = useCarouselContext()
    const { indexes, getIndicatorProps, getIndicatorsProps } =
      useCarouselIndicators()

    return (
      <ui.div {...getIndicatorsProps(rest)}>
        {indexes.map((index) => {
          const selected = index === selectedIndex

          if (typeof component === "function") {
            const child = component({
              index,
              selected,
            }) as null | ReactElement<any>

            if (!child) return null

            const props = getIndicatorProps({ ...child.props, index })

            return cloneElement(child as ReactElement, props)
          } else {
            const { key, ...props } = getIndicatorProps({ index })

            return <CarouselIndicator key={key} {...props} />
          }
        })}
      </ui.div>
    )
  },
  "indicators",
)()

interface CarouselIndicatorProps extends HTMLUIProps<"button"> {}

const CarouselIndicator = withContext<"button", CarouselIndicatorProps>(
  "button",
  "indicator",
)()

export interface CarouselSlideProps extends HTMLUIProps, UseCarouselSlideProps {
  /**
   * The CSS `width` property.
   */
  size?: CSSProps["width"]
}

export const CarouselSlide = withContext<"div", CarouselSlideProps>(
  ({ ref, className, css: cssProp, size = "{slideSize}", ...rest }) => {
    const { includeGapInSize, orientation } = useCarouselContext()
    const { getSlideProps } = useCarouselSlide(rest)
    const css = mergeCSS(cssProp, {
      flex: `0 0 ${size}`,
      ...(includeGapInSize
        ? { [orientation === "vertical" ? "pb" : "pr"]: "{gap}" }
        : { [orientation === "vertical" ? "mb" : "mr"]: "{gap}" }),
    })

    return (
      <ui.div css={css} {...getSlideProps({ className })}>
        <CarouselSlideInner ref={ref} {...rest} />
      </ui.div>
    )
  },
  "slide",
)()

interface CarouselSlideInnerProps extends HTMLUIProps {}

const CarouselSlideInner = withContext<"div", CarouselSlideInnerProps>(
  "div",
  "slide-inner",
)()
