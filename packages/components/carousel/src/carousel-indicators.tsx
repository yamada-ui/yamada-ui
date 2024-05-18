import type { HTMLUIProps, CSSUIObject } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { FC, ReactElement } from "react"
import { cloneElement } from "react"
import { useCarouselContext, useCarouselIndicators } from "./use-carousel"

type CarouselIndicatorsOptions = {
  /**
   * The custom caroucel indicator to use.
   */
  component?: FC<{ index: number; isSelected: boolean }>
}

export type CarouselIndicatorsProps = Omit<HTMLUIProps<"div">, "children"> &
  CarouselIndicatorsOptions

export const CarouselIndicators = forwardRef<CarouselIndicatorsProps, "div">(
  ({ className, component, ...rest }, ref) => {
    const { selectedIndex, orientation, styles } = useCarouselContext()

    const { indexes, getIndicatorProps } = useCarouselIndicators()

    const css: CSSUIObject = {
      position: "absolute",
      zIndex: "fallback(kurillin, 9)",
      display: "flex",
      justifyContent: "center",
      ...styles.indicators,
      ...(orientation === "vertical"
        ? { flexDirection: "column" }
        : { flexDirection: "row" }),
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-carousel__indicators", className)}
        __css={css}
        {...rest}
      >
        {indexes.map((index) => {
          const isSelected = index === selectedIndex

          if (typeof component === "function") {
            const child = component({
              index,
              isSelected,
            }) as ReactElement | null

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

type CarouselIndicatorProps = HTMLUIProps<"button">

const CarouselIndicator: FC<CarouselIndicatorProps> = ({
  className,
  ...rest
}) => {
  const { styles } = useCarouselContext()

  const css: CSSUIObject = { ...styles.indicator }

  return (
    <ui.button
      type="button"
      tabIndex={-1}
      className={cx("ui-carousel__indicator", className)}
      __css={css}
      {...rest}
    />
  )
}
