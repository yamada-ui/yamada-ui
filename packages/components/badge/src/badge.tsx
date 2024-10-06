import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentStyle,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"

export interface BadgeProps extends HTMLUIProps<"span">, ThemeProps<"Badge"> {}

/**
 * `Badge` is a component that emphasizes the status of an item to make it immediately recognizable.
 *
 * @see Docs https://yamada-ui.com/components/data-display/badge
 */
export const Badge = forwardRef<BadgeProps, "span">((props, ref) => {
  const [styles, mergedProps] = useComponentStyle("Badge", props)
  const { className, ...rest } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {
    display: "inline-block",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
    ...styles,
  }

  return (
    <ui.span
      ref={ref}
      className={cx("ui-badge", className)}
      __css={css}
      {...rest}
    />
  )
})

Badge.displayName = "Badge"
Badge.__ui__ = "Badge"
