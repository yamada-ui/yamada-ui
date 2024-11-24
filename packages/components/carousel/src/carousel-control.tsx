import type { IconButtonProps } from "@yamada-ui/button"
import type { CSSUIObject } from "@yamada-ui/core"
import { IconButton } from "@yamada-ui/button"
import { forwardRef } from "@yamada-ui/core"
import { ChevronLeftIcon, ChevronRightIcon } from "@yamada-ui/lucide"
import { cx } from "@yamada-ui/utils"
import { useCarouselContext, useCarouselControl } from "./use-carousel"

export interface CarouselControlProps extends IconButtonProps {}

export const CarouselControlPrev = forwardRef<CarouselControlProps, "button">(
  ({ className, ...rest }, ref) => {
    const { orientation } = useCarouselContext()

    return (
      <CarouselControl
        ref={ref}
        className={cx("ui-carousel__control--prev", className)}
        icon={
          <ChevronLeftIcon
            __css={{
              fontSize: "1.5em",
              transform:
                orientation === "vertical" ? "rotate(90deg)" : "rotate(0deg)",
            }}
          />
        }
        operation="prev"
        {...rest}
      />
    )
  },
)

CarouselControlPrev.displayName = "CarouselControlPrev"
CarouselControlPrev.__ui__ = "CarouselControlPrev"

export const CarouselControlNext = forwardRef<CarouselControlProps, "button">(
  ({ className, ...rest }, ref) => {
    const { orientation } = useCarouselContext()

    return (
      <CarouselControl
        ref={ref}
        className={cx("ui-carousel__control--next", className)}
        icon={
          <ChevronRightIcon
            __css={{
              fontSize: "1.5em",
              transform:
                orientation === "vertical" ? "rotate(90deg)" : "rotate(0deg)",
            }}
          />
        }
        operation="next"
        {...rest}
      />
    )
  },
)

CarouselControlNext.displayName = "CarouselControlNext"
CarouselControlNext.__ui__ = "CarouselControlNext"

const CarouselControl = forwardRef<
  { operation: "next" | "prev" } & CarouselControlProps,
  "button"
>(({ className, operation, ...rest }, ref) => {
  const { styles } = useCarouselContext()
  const { getControlProps } = useCarouselControl({ operation })

  const css: CSSUIObject = {
    position: "absolute",
    zIndex: "fallback(kurillin, 9)",
    ...styles.control,
    ...styles[operation],
  }

  return (
    <IconButton
      className={cx("ui-carousel__control", className)}
      colorScheme={["whiteAlpha", "blackAlpha"]}
      isRounded
      __css={css}
      {...getControlProps(rest, ref)}
    />
  )
})

CarouselControl.displayName = "CarouselControl"
CarouselControl.__ui__ = "CarouselControl"
