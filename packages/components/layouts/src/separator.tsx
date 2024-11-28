import type {
  CSSUIObject,
  HTMLUIProps,
  ThemeColorScheme,
  ThemeSize,
  ThemeVariant,
} from "@yamada-ui/core"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentStyle,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useMemo } from "react"

interface SeparatorOptions {
  /**
   * The orientation of the divider.
   *
   * @default 'horizontal'
   */
  orientation?: "horizontal" | "vertical"
}

interface MergeThemeProps {
  /**
   * The color scheme of the component.
   */
  colorScheme?: ThemeColorScheme
  /**
   * The size of the component.
   */
  size?: ThemeSize<"Divider"> | ThemeSize<"Separator">
  /**
   * The variant of the component.
   */
  variant?: ThemeVariant<"Divider"> | ThemeVariant<"Separator">
}

export interface SeparatorProps
  extends HTMLUIProps<"hr">,
    MergeThemeProps,
    SeparatorOptions {}

/**
 * `Separator` is a component that represents a division between elements.
 *
 * @see Docs https://yamada-ui.com/components/layouts/separator
 */
export const Separator = forwardRef<SeparatorProps, "hr">((props, ref) => {
  const [dividerStyles, dividerProps] = useComponentStyle("Divider", props)
  const [separatorStyles, separatorProps] = useComponentStyle(
    "Separator",
    props,
  )
  const {
    className,
    orientation = "horizontal",
    __css,
    ...rest
  } = omitThemeProps({ ...dividerProps, ...separatorProps })
  const {
    borderBottomWidth,
    borderColor,
    borderLeftWidth,
    borderRightWidth,
    borderStyle,
    borderTopWidth,
    borderWidth,
    ...styles
  } = { ...dividerStyles, ...separatorStyles }

  const orientationStyles = useMemo(
    () => ({
      horizontal: {
        border: "0",
        borderBottomWidth:
          borderBottomWidth || borderTopWidth || borderWidth || "1px",
        borderColor,
        borderStyle,
        width: "100%",
      },
      vertical: {
        border: "0",
        borderColor,
        borderLeftWidth:
          borderLeftWidth || borderRightWidth || borderWidth || "1px",
        borderStyle,
        height: "100%",
      },
    }),
    [
      borderBottomWidth,
      borderColor,
      borderLeftWidth,
      borderRightWidth,
      borderStyle,
      borderTopWidth,
      borderWidth,
    ],
  )

  const additionalStyles = useMemo(
    () => orientationStyles[orientation],
    [orientationStyles, orientation],
  ) as CSSUIObject

  const css = {
    ...styles,
    ...additionalStyles,
    ...__css,
  }

  return (
    <ui.hr
      ref={ref}
      className={cx("ui-separator", className)}
      __css={css}
      {...rest}
    />
  )
})

Separator.displayName = "Separator"
Separator.__ui__ = "Separator"
