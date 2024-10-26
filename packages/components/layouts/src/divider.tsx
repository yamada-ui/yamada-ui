import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentStyle,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useMemo } from "react"

interface DividerOptions {
  /**
   * The orientation of the divider.
   *
   * @default 'horizontal'
   */
  orientation?: "horizontal" | "vertical"
}

export interface DividerProps
  extends HTMLUIProps<"hr">,
    ThemeProps<"Divider">,
    DividerOptions {}

/**
 * `Divider` is a component that represents a division between elements.
 *
 * @see Docs https://yamada-ui.com/components/layouts/divider
 */
export const Divider = forwardRef<DividerProps, "hr">((props, ref) => {
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
  ] = useComponentStyle("Divider", props)
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

  const dividerStyles = useMemo(
    () => customStyles[orientation],
    [customStyles, orientation],
  ) as CSSUIObject

  const css = {
    ...styles,
    ...dividerStyles,
    ...__css,
  }

  return (
    <ui.hr
      ref={ref}
      className={cx("ui-divider", className)}
      __css={css}
      {...rest}
    />
  )
})

Divider.displayName = "Divider"
Divider.__ui__ = "Divider"
