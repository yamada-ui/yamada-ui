import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
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
   * The orientation of the separator.
   *
   * @default 'horizontal'
   */
  orientation?: "horizontal" | "vertical"
}

export interface SeparatorProps
  extends HTMLUIProps<"hr">,
    ThemeProps<"Separator">,
    SeparatorOptions {}

/**
 * `Separator` is a component that represents a division between elements.
 *
 * @see Docs https://yamada-ui.com/components/layouts/separator
 */
export const Separator = forwardRef<SeparatorProps, "hr">((props, ref) => {
  const [
    {
      borderBottomWidth,
      borderColor,
      borderLeftWidth,
      borderRightWidth,
      borderStyle,
      borderTopWidth,
      borderWidth,
      ...styles
    },
    mergedProps,
  ] = useComponentStyle("Separator", props)
  const {
    className,
    orientation = "horizontal",
    __css,
    ...rest
  } = omitThemeProps(mergedProps)

  const customStyles = useMemo(
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

  const separatorStyles = useMemo(
    () => customStyles[orientation],
    [customStyles, orientation],
  ) as CSSUIObject

  const css = {
    ...styles,
    ...separatorStyles,
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
