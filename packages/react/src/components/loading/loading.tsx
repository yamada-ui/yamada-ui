import type { CSSUIProps, FC, ThemeProps } from "../../core"
import type { IconProps } from "../icon"
import { useMemo } from "react"
import { mergeVars, omitThemeProps, useComponentStyle } from "../../core"
import { cx } from "../../utils"
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
   * The variant of the Loading.
   *
   * @default 'oval'
   */
  variant?: "audio" | "circles" | "dots" | "grid" | "oval" | "puff" | "rings"
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
export const Loading: FC<LoadingProps> = (props) => {
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
      size,
      color: "$color",
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
      return <Grid {...computedProps} />

    case "audio":
      return <Audio {...computedProps} />

    case "dots":
      return <Dots {...computedProps} />

    case "puff":
      return <Puff {...computedProps} />

    case "rings":
      return <Rings {...computedProps} />

    case "circles":
      return <Circles {...computedProps} />

    default:
      return <Oval {...computedProps} />
  }
}

Loading.__ui__ = "Loading"
