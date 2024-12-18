import type {
  CSSUIObject,
  CSSUIProps,
  FC,
  HTMLUIProps,
  ThemeProps,
  Token,
} from "@yamada-ui/core"
import type { CarouselControlProps } from "./carousel-control"
import type { CarouselIndicatorsProps } from "./carousel-indicators"
import type {
  AlignmentOptionType,
  ScrollContainOptionType,
  SlidesInViewOptionsType,
  UseCarouselProps,
} from "./use-carousel"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import { useValue } from "@yamada-ui/use-value"
import {
  cx,
  filterUndefined,
  findChild,
  getValidChildren,
  omitChildren,
  pickChildren,
} from "@yamada-ui/utils"
import { cloneElement } from "react"
import { CarouselControlNext, CarouselControlPrev } from "./carousel-control"
import { CarouselIndicators } from "./carousel-indicators"
import { CarouselSlide } from "./carousel-slide"
import {
  CarouselProvider,
  useCarousel,
  useCarouselContext,
} from "./use-carousel"

interface CarouselOptions {
  /**
   * The alignment of the carousel.
   *
   * @default 'center'
   */
  align?: Token<AlignmentOptionType>
  /**
   * If `true`, the carousel will be autoplay.
   *
   * @default false
   */
  autoplay?: Token<boolean>
  /**
   * Clear leading and trailing empty space that causes excessive scrolling.
   * Use trimSnaps to only use snap points that trigger scrolling or keepSnaps to keep them.
   *
   * @default ''
   */
  containScroll?: Token<ScrollContainOptionType>
  /**
   * The number for the autoplay interval of the carousel.
   *
   * @default 4000
   */
  delay?: Token<number>
  /**
   * If `true`, momentum scrolling will be enabled.
   *
   * @default false
   */
  dragFree?: Token<boolean>
  /**
   * If `true`, carousel can be scrolled with mouse and touch interactions.
   *
   * @default true
   */
  draggable?: Token<boolean>
  /**
   * Set scroll duration when triggered by any of the API methods.
   * Higher numbers enables slower scrolling.
   * Drag interactions are not affected because duration is then determined by the drag force.
   *
   * @default 25
   */
  duration?: Token<number>
  /**
   * If `true`, gap will be treated as part of the carousel slide size.
   *
   * @default true
   */
  includeGapInSize?: Token<boolean>
  /**
   * Choose a fraction representing the percentage portion of a slide that needs to be visible in order to be considered in view.
   *
   * @default 0
   */
  inViewThreshold?: Token<SlidesInViewOptionsType>
  /**
   * If `true`, infinite looping.
   * Automatically falls back to false if slide content isn't enough to loop.
   *
   * @default true
   */
  loop?: Token<boolean>
  /**
   * The orientation of the carousel.
   *
   * @default 'horizontal'
   */
  orientation?: Token<"horizontal" | "vertical">
  /**
   * If `true`, allow the carousel to skip scroll snaps if it's dragged vigorously.
   * Note that this option will be ignored if the dragFree option is set to true.
   *
   * @default false
   */
  skipSnaps?: Token<boolean>
  /**
   * The CSS `width` property.
   */
  slideSize?: CSSUIProps["width"]
  /**
   * The number of slides that should be scrolled with next or previous buttons.
   *
   * @default 1
   */
  slidesToScroll?: Token<number>
  /**
   * If `true`, autoplay will pause when the mouse entries over.
   *
   * @default true
   */
  stopMouseEnterAutoplay?: Token<boolean>
  /**
   * If `true`, display the carousel control buttons.
   *
   * @default true
   */
  withControls?: Token<boolean>
  /**
   * If `true`, display the carousel indicator buttons.
   *
   * @default true
   */
  withIndicators?: Token<boolean>
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

export interface CarouselProps
  extends ThemeProps<"Carousel">,
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
    >,
    CarouselOptions {}

/**
 * `Carousel` is a component that displays multiple elements like a slideshow.
 *
 * @see Docs https://yamada-ui.com/components/data-display/carousel
 */
export const Carousel = forwardRef<CarouselProps, "div">(
  ({ h, height = h, minH, minHeight = minH, ...props }, ref) => {
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
    const [styles, mergedProps] = useComponentMultiStyle("Carousel", {
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
    })
    const {
      className,
      withControls = true,
      withIndicators = true,
      controlNextProps,
      controlPrevProps,
      controlProps,
      indicatorsProps,
      innerProps,
      ...computedProps
    } = omitThemeProps(mergedProps)
    const computedWithControls = useValue(withControls)
    const computedWithIndicators = useValue(withIndicators)
    const { id, children, getContainerProps, getSlidesProps, ...rest } =
      useCarousel({
        ...computedProps,
      })
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
      cloneElement(child, { index }),
    )
    const css: CSSUIObject = {
      h: "fit-content",
      position: "relative",
      ...styles.container,
    }

    return (
      <CarouselProvider value={{ id, styles, ...rest }}>
        <ui.section
          className={cx("ui-carousel", className)}
          __css={css}
          {...getContainerProps({}, ref)}
        >
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
      </CarouselProvider>
    )
  },
)

Carousel.displayName = "Carousel"
Carousel.__ui__ = "Carousel"

interface CarouselSlidesProps extends HTMLUIProps {}

const CarouselSlides = forwardRef<CarouselSlidesProps, "div">(
  ({ ...rest }, ref) => {
    const css: CSSUIObject = { h: "fit-content", overflow: "hidden", w: "100%" }

    return (
      <ui.div ref={ref} className="ui-carousel__sliders" __css={css}>
        <CarouselSlidesInner {...rest} />
      </ui.div>
    )
  },
)

CarouselSlides.displayName = "CarouselSlides"
CarouselSlides.__ui__ = "CarouselSlides"

interface CarouselSlidesInnerProps extends HTMLUIProps {}

const CarouselSlidesInner: FC<CarouselSlidesInnerProps> = ({ ...rest }) => {
  const { includeGapInSize, orientation, styles } = useCarouselContext()

  const css: CSSUIObject = {
    display: "flex",
    flexDirection: orientation === "vertical" ? "column" : "row",
    ...styles.inner,
    ...(includeGapInSize
      ? {
          [orientation === "vertical" ? "mb" : "mr"]: "calc($gap * -1)",
        }
      : {}),
  }

  return (
    <ui.div className="ui-carousel__sliders__inner" __css={css} {...rest} />
  )
}

CarouselSlidesInner.displayName = "CarouselSlidesInner"
CarouselSlidesInner.__ui__ = "CarouselSlidesInner"
