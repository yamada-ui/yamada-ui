import type { HTMLUIProps, CSSUIObject } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { UseCarouselSlideProps } from "./use-carousel"
import { useCarouselContext, useCarouselSlide } from "./use-carousel"

interface CarouselSlideOptions {
  /**
   * The CSS `width` property.
   */
  size?: CSSUIObject["width"]
}

export interface CarouselSlideProps
  extends HTMLUIProps,
    UseCarouselSlideProps,
    CarouselSlideOptions {}

export const CarouselSlide = forwardRef<CarouselSlideProps, "div">(
  ({ className, size, ...rest }, ref) => {
    const { slideSize, includeGapInSize, orientation, gap } =
      useCarouselContext()

    const { getSlideProps } = useCarouselSlide(rest)

    size ??= slideSize

    const css: CSSUIObject = {
      position: "relative",
      flex: `0 0 ${size}`,
      ...(includeGapInSize
        ? { [orientation === "vertical" ? "pb" : "pr"]: gap }
        : { [orientation === "vertical" ? "mb" : "mr"]: gap }),
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

interface CarouselSlideInnerProps extends HTMLUIProps {}

const CarouselSlideInner = forwardRef<CarouselSlideInnerProps, "div">(
  ({ ...rest }, ref) => {
    return (
      <ui.div
        ref={ref}
        className="ui-carousel__slide__inner"
        w="100%"
        h="100%"
        {...rest}
      />
    )
  },
)
