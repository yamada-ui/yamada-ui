import type { HTMLUIProps, ThemeProps, CSSUIObject } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"

export type BadgeProps = HTMLUIProps<"span"> & ThemeProps<"Badge">

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
    whiteSpace: "nowrap",
    verticalAlign: "middle",
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
