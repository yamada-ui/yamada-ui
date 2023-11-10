import { forwardRef, CSSUIProps } from "@yamada-ui/core"
import { IconProps } from "@yamada-ui/icon"
import { useToken } from "@yamada-ui/use-token"
import { useValue } from "@yamada-ui/use-value"
import { cx } from "@yamada-ui/utils"
import { useMemo } from "react"
import { Audio } from "./audio"
import { Circles } from "./circles"
import { Dots } from "./dots"
import { Grid } from "./grid"
import { Oval } from "./oval"
import { Puff } from "./puff"
import { Rings } from "./rings"

type LoadingOptions = {
  /**
   * The variant of the Loading.
   *
   * @default 'oval'
   */
  variant?: "oval" | "grid" | "audio" | "dots" | "puff" | "rings" | "circles"
  /**
   * The CSS `color` property.
   *
   * @default 'primary'
   */
  secondaryColor?: CSSUIProps["color"]
  /**
   * The CSS `dur` property.
   */
  duration?: IconProps["dur"]
}

export type LoadingProps = Omit<IconProps, "dur"> & LoadingOptions

export const Loading = forwardRef<LoadingProps, "svg">(
  (
    {
      className,
      variant = "oval",
      color: _color = "primary",
      secondaryColor: _secondaryColor,
      size = "1em",
      duration,
      ...rest
    },
    ref,
  ) => {
    const color = (useToken("colors", useValue(_color)) ?? _color) as string
    const secondaryColor = (useToken("colors", useValue(_secondaryColor)) ??
      _secondaryColor) as string

    const props = useMemo(
      () => ({
        className: cx("ui-loading", className),
        size,
        color,
        duration,
        ...rest,
      }),
      [className, color, duration, rest, size],
    )

    switch (variant) {
      case "grid":
        return <Grid ref={ref} {...props} />

      case "audio":
        return <Audio ref={ref} {...props} />

      case "dots":
        return <Dots ref={ref} {...props} />

      case "puff":
        return <Puff ref={ref} {...props} />

      case "rings":
        return <Rings ref={ref} {...props} />

      case "circles":
        return <Circles ref={ref} {...props} />

      default:
        return <Oval ref={ref} {...props} secondaryColor={secondaryColor} />
    }
  },
)
