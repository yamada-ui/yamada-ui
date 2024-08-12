import type { CSSUIProps, ThemeProps, UIProps } from "@yamada-ui/core"
import { forwardRef, useComponentStyle } from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { useMemo } from "react"
import { Audio } from "./audio"
import { Circles } from "./circles"
import { Dots } from "./dots"
import { Grid } from "./grid"
import { Oval } from "./oval"
import { Puff } from "./puff"
import { Rings } from "./rings"

type ComponentProps = Omit<UIProps, "color"> & {
  color: string
  secondaryColor?: string
}

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

export type LoadingProps = IconProps &
  Pick<ThemeProps<"Loading">, "colorScheme"> &
  LoadingOptions

/**
 * `Loading` is a component displayed during waiting times, such as when data is being loaded.
 *
 * @see Docs https://yamada-ui.com/components/feedback/loading
 */
export const Loading = forwardRef<LoadingProps, "svg">((props, ref) => {
  const [
    styles,
    {
      className,
      variant = "oval",
      color,
      secondaryColor,
      colorScheme = "primary",
      size = "1em",
      dur,
      duration,
      ...rest
    },
  ] = useComponentStyle("Loading", props)

  const computedProps = useMemo<ComponentProps>(
    () => ({
      className: cx("ui-loading", className),
      size,
      var: [
        {
          __prefix: "ui",
          name: "color",
          token: "colors",
          value: color ?? colorScheme,
        },
        {
          __prefix: "ui",
          name: "secondary-color",
          token: "colors",
          value: secondaryColor,
        },
      ],
      color: "var(--ui-color)",
      ...(secondaryColor
        ? { secondaryColor: "var(--ui-secondary-color)" }
        : {}),
      duration: duration ?? dur,
      __css: { ...styles },
      ...rest,
    }),
    [
      className,
      color,
      secondaryColor,
      colorScheme,
      size,
      duration,
      dur,
      rest,
      styles,
    ],
  )

  switch (variant) {
    case "grid":
      return <Grid ref={ref} {...computedProps} />

    case "audio":
      return <Audio ref={ref} {...computedProps} />

    case "dots":
      return <Dots ref={ref} {...computedProps} />

    case "puff":
      return <Puff ref={ref} {...computedProps} />

    case "rings":
      return <Rings ref={ref} {...computedProps} />

    case "circles":
      return <Circles ref={ref} {...computedProps} />

    default:
      return <Oval ref={ref} {...computedProps} />
  }
})
