import type { CSSUIObject, CSSUIProps, HTMLUIProps } from "../../core"
import type { UseCarouselSlideProps } from "./use-carousel"
import { forwardRef, ui } from "../../core"
import { cx } from "../../utils"
import { useCarouselContext, useCarouselSlide } from "./use-carousel"

interface CarouselSlideOptions {
  /**
   * The CSS `width` property.
   */
  size?: CSSUIProps["width"]
}

export interface CarouselSlideProps
  extends HTMLUIProps,
    UseCarouselSlideProps,
    CarouselSlideOptions {}

export const CarouselSlide = forwardRef<CarouselSlideProps, "div">(
  ({ className, size = "$slideSize", ...rest }, ref) => {
    const { includeGapInSize, orientation } = useCarouselContext()
    const { getSlideProps } = useCarouselSlide(rest)
    const css: CSSUIObject = {
      flex: `0 0 ${size}`,
      position: "relative",
      ...(includeGapInSize
        ? { [orientation === "vertical" ? "pb" : "pr"]: "$gap" }
        : { [orientation === "vertical" ? "mb" : "mr"]: "$gap" }),
    }

    return (
      <ui.div
        className={cx("ui-carousel__slide", className)}
        __css={css}
        {...getSlideProps({})}
      >
        <CarouselSlideInner ref={ref} {...rest} />
      </ui.div>
    )
  },
)

CarouselSlide.displayName = "CarouselSlide"
CarouselSlide.__ui__ = "CarouselSlide"

interface CarouselSlideInnerProps extends HTMLUIProps {}

const CarouselSlideInner = forwardRef<CarouselSlideInnerProps, "div">(
  ({ ...rest }, ref) => {
    return (
      <ui.div
        ref={ref}
        className="ui-carousel__slide__inner"
        boxSize="100%"
        {...rest}
      />
    )
  },
)

CarouselSlideInner.displayName = "CarouselSlideInner"
CarouselSlideInner.__ui__ = "CarouselSlideInner"
