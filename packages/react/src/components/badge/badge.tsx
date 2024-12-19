import type { CSSUIObject, FC, HTMLUIProps, ThemeProps } from "../../core"
import { omitThemeProps, ui, useComponentStyle } from "../../core"
import { cx } from "../../utils"

export interface BadgeProps extends HTMLUIProps<"span">, ThemeProps<"Badge"> {}

/**
 * `Badge` is a component that emphasizes the status of an item to make it immediately recognizable.
 *
 * @see Docs https://yamada-ui.com/components/data-display/badge
 */
export const Badge: FC<BadgeProps> = (props) => {
  const [styles, mergedProps] = useComponentStyle("Badge", props)
  const { className, ...rest } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {
    display: "inline-block",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
    ...styles,
  }

  return <ui.span className={cx("ui-badge", className)} __css={css} {...rest} />
}

Badge.__ui__ = "Badge"
