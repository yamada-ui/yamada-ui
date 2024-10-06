import type { CSSUIProps, ThemeProps } from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import {
  forwardRef,
  mergeVars,
  omitThemeProps,
  useComponentStyle,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useMemo } from "react"
import { Audio } from "./audio"
import { Circles } from "./circles"
import { Dots } from "./dots"
import { Grid } from "./grid"
import { Oval } from "./oval"
import { Puff } from "./puff"
import { Rings } from "./rings"

interface ComponentProps extends Omit<IconProps, "color"> {
  color: string
  secondaryColor?: string
}

interface LoadingOptions {
  /**
   * The CSS `dur` property.
   */
  duration?: IconProps["dur"]
  /**
   * The CSS `color` property.
   *
   * @default 'primary'
   */
  secondaryColor?: CSSUIProps["color"]
  /**
   * The variant of the Loading.
   *
   * @default 'oval'
   */
  variant?: "audio" | "circles" | "dots" | "grid" | "oval" | "puff" | "rings"
}

export interface LoadingProps
  extends Omit<IconProps, "variant">,
    Pick<ThemeProps<"Loading">, "colorScheme">,
    LoadingOptions {}

/**
 * `Loading` is a component displayed during waiting times, such as when data is being loaded.
 *
 * @see Docs https://yamada-ui.com/components/feedback/loading
 */
export const Loading = forwardRef<LoadingProps, "svg">((props, ref) => {
  const [
    { color, ...styles },
    { colorScheme, size = "1em", variant = "oval", ...mergedProps },
  ] = useComponentStyle("Loading", props)
  const {
    className,
    color: colorProp,
    dur,
    duration,
    secondaryColor,
    ...rest
  } = omitThemeProps(mergedProps)

  const computedProps = useMemo<ComponentProps>(
    () => ({
      className: cx("ui-loading", className),
      color: "$color",
      size,
      ...(secondaryColor ? { secondaryColor: "$secondary-color" } : {}),
      duration: duration ?? dur,
      __css: {
        ...styles,
        vars: mergeVars(styles.vars, [
          {
            name: "color",
            token: "colors",
            value:
              colorProp ??
              (color as string | undefined) ??
              `${colorScheme}.500`,
          },
          {
            name: "secondary-color",
            token: "colors",
            value: secondaryColor,
          },
        ]),
      },
      ...rest,
    }),
    [
      className,
      size,
      secondaryColor,
      duration,
      dur,
      styles,
      colorProp,
      color,
      colorScheme,
      rest,
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
