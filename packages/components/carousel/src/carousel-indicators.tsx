import type { CSSUIObject, FC, HTMLUIProps } from "@yamada-ui/core"
import type { ReactElement } from "react"
import { forwardRef, ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { cloneElement } from "react"
import { useCarouselContext, useCarouselIndicators } from "./use-carousel"

interface CarouselIndicatorsOptions {
  /**
   * The custom carousel indicator to use.
   */
  component?: FC<{ index: number; isSelected: boolean }>
}

export interface CarouselIndicatorsProps
  extends HTMLUIProps,
    CarouselIndicatorsOptions {}

export const CarouselIndicators = forwardRef<CarouselIndicatorsProps, "div">(
  ({ className, component, ...rest }, ref) => {
    const { orientation, selectedIndex, styles } = useCarouselContext()
    const { indexes, getIndicatorProps, getIndicatorsProps } =
      useCarouselIndicators()

    const css: CSSUIObject = {
      display: "flex",
      justifyContent: "center",
      position: "absolute",
      zIndex: "fallback(kurillin, 9)",
      ...styles.indicators,
      ...(orientation === "vertical"
        ? { flexDirection: "column" }
        : { flexDirection: "row" }),
    }

    return (
      <ui.div
        className={cx("ui-carousel__indicators", className)}
        {...getIndicatorsProps(rest, ref)}
        __css={css}
        {...rest}
      >
        {indexes.map((index) => {
          const isSelected = index === selectedIndex

          if (typeof component === "function") {
            const child = component({
              index,
              isSelected,
            }) as null | ReactElement

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
)

CarouselIndicators.displayName = "CarouselIndicators"
CarouselIndicators.__ui__ = "CarouselIndicators"

interface CarouselIndicatorProps extends HTMLUIProps<"button"> {}

const CarouselIndicator = forwardRef<CarouselIndicatorProps, "button">(
  ({ className, ...rest }, ref) => {
    const { styles } = useCarouselContext()

    const css: CSSUIObject = { ...styles.indicator }

    return (
      <ui.button
        ref={ref}
        type="button"
        className={cx("ui-carousel__indicators__indicator", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

CarouselIndicator.displayName = "CarouselIndicator"
CarouselIndicator.__ui__ = "CarouselIndicator"
