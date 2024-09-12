import type {
  HTMLUIProps,
  ThemeProps,
  CSSUIObject,
  Token,
  CSSUIProps,
} from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { useToken } from "@yamada-ui/use-token"
import { useValue } from "@yamada-ui/use-value"
import {
  cx,
  filterUndefined,
  findChildren,
  getValidChildren,
  omitChildren,
  pickChildren,
} from "@yamada-ui/utils"
import type { FC } from "react"
import { cloneElement } from "react"
import type {
  AlignmentOptionType,
  ScrollContainOptionType,
  SlidesInViewOptionsType,
  UseCarouselProps,
} from "./use-carousel"
import {
  CarouselProvider,
  useCarousel,
  useCarouselContext,
} from "./use-carousel"
import type { CarouselControlProps, CarouselIndicatorsProps } from "./"
import {
  CarouselControlNext,
  CarouselControlPrev,
  CarouselIndicators,
  CarouselSlide,
} from "./"

type CarouselOptions = {
  /**
   * The orientation of the carousel.
   *
   * @default 'horizontal'
   */
  orientation?: Token<"vertical" | "horizontal">
  /**
   * The alignment of the carousel.
   *
   * @default 'center'
   */
  align?: Token<AlignmentOptionType>
  /**
   * Clear leading and trailing empty space that causes excessive scrolling.
   * Use trimSnaps to only use snap points that trigger scrolling or keepSnaps to keep them.
   *
   * @default ''
   */
  containScroll?: Token<ScrollContainOptionType>
  /**
   * The number of slides that should be scrolled with next or previous buttons.
   *
   * @default 1
   */
  slidesToScroll?: Token<number>
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
   * If `true`, allow the carousel to skip scroll snaps if it's dragged vigorously.
   * Note that this option will be ignored if the dragFree option is set to true.
   *
   * @default false
   */
  skipSnaps?: Token<boolean>
  /**
   * Set scroll duration when triggered by any of the API methods.
   * Higher numbers enables slower scrolling.
   * Drag interactions are not affected because duration is then determined by the drag force.
   *
   * @default 25
   */
  duration?: Token<number>
  /**
   * The number for the autoplay interval of the carousel.
   *
   * @default 4000
   */
  delay?: Token<number>
  /**
   * If `true`, the carousel will be autoplay.
   *
   * @default false
   */
  autoplay?: Token<boolean>
  /**
   * If `true`, autoplay will pause when the mouse entries over.
   *
   * @default true
   */
  stopMouseEnterAutoplay?: Token<boolean>
  /**
   * If `true`, gap will be treated as part of the carousel slide size.
   *
   * @default true
   */
  includeGapInSize?: Token<boolean>
  /**
   * The CSS `width` property.
   */
  slideSize?: CSSUIProps["width"]
  /**
   * Props for carousel inner element.
   */
  innerProps?: HTMLUIProps<"div">
  /**
   * If `true`, display the carousel control buttons.
   *
   * @default true
   */
  withControls?: Token<boolean>
  /**
   * Props for carousel control element.
   */
  controlProps?: CarouselControlProps
  /**
   * Props for previous of the carousel control element.
   */
  controlPrevProps?: CarouselControlProps
  /**
   * Props for next of the carousel control element.
   */
  controlNextProps?: CarouselControlProps
  /**
   * If `true`, display the carousel indicator buttons.
   *
   * @default true
   */
  withIndicators?: Token<boolean>
  /**
   * Props for carousel indicators element.
   */
  indicatorsProps?: CarouselIndicatorsProps
}

export type CarouselProps = ThemeProps<"Carousel"> &
  Omit<HTMLUIProps<"div">, "onChange" | "draggable"> &
  Pick<
    UseCarouselProps,
    | "index"
    | "defaultIndex"
    | "onChange"
    | "onScrollProgress"
    | "watchDrag"
    | "watchResize"
    | "watchSlides"
    | "controlRef"
  > &
  CarouselOptions

/**
 * `Carousel` is a component that displays multiple elements like a slideshow.
 *
 * @see Docs https://yamada-ui.com/components/data-display/carousel
 */
export const Carousel = forwardRef<CarouselProps, "div">(
  ({ h, height, minH, minHeight, ...props }, ref) => {
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
    const _gap = useValue(props.gap)
    const gap = useToken("spaces", _gap) ?? _gap
    const _slideSize = useValue(props.slideSize)
    const slideSize = useToken("sizes", _slideSize) ?? _slideSize

    const [styles, mergedProps] = useMultiComponentStyle("Carousel", {
      ...props,
      orientation,
      align,
      autoplay,
      stopMouseEnterAutoplay,
      loop,
      duration,
      delay,
      slidesToScroll,
      draggable,
      dragFree,
      inViewThreshold,
      skipSnaps,
      containScroll,
      includeGapInSize,
      gap,
      slideSize,
    })
    const {
      className,
      innerProps,
      withControls = true,
      controlProps,
      controlPrevProps,
      controlNextProps,
      withIndicators = true,
      indicatorsProps,
      ...computedProps
    } = omitThemeProps(mergedProps)

    const computedWithControls = useValue(withControls)
    const computedWithIndicators = useValue(withIndicators)

    const { getContainerProps, getSlidesProps, children, ...rest } =
      useCarousel({
        ...computedProps,
      })

    const validChildren = getValidChildren(children)

    const [customCarouselControlPrev] = findChildren(
      validChildren,
      CarouselControlPrev,
    )
    const [customCarouselControlNext] = findChildren(
      validChildren,
      CarouselControlNext,
    )
    const [customCarouselIndicators] = findChildren(
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

    h ??= height
    minH ??= minHeight

    return (
      <CarouselProvider value={{ styles, ...rest }}>
        <ui.div
          className={cx("ui-carousel", className)}
          __css={{
            position: "relative",
            h: "fit-content",
            ...styles.container,
          }}
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
              ...filterUndefined({ h, minH }),
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
        </ui.div>
      </CarouselProvider>
    )
  },
)

type CarouselSlidesProps = HTMLUIProps<"div">

const CarouselSlides = forwardRef<CarouselSlidesProps, "div">(
  ({ ...rest }, ref) => {
    const css: CSSUIObject = { w: "100%", h: "fit-content", overflow: "hidden" }

    return (
      <ui.div ref={ref} className="ui-carousel__sliders" __css={css}>
        <CarouselSlidesInner {...rest} />
      </ui.div>
    )
  },
)

type CarouselSlidesInnerProps = HTMLUIProps<"div">

const CarouselSlidesInner: FC<CarouselSlidesInnerProps> = ({ ...rest }) => {
  const { orientation, includeGapInSize, gap, styles } = useCarouselContext()

  const css: CSSUIObject = {
    display: "flex",
    flexDirection: orientation === "vertical" ? "column" : "row",
    ...styles.inner,
    ...(includeGapInSize
      ? {
          vars: [{ name: "gap", token: "spaces", value: gap }],
          [orientation === "vertical" ? "mb" : "mr"]: "calc($gap * -1)",
        }
      : {}),
  }

  return (
    <ui.div className="ui-carousel__sliders__inner" __css={css} {...rest} />
  )
}
