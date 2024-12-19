import type { FC, HTMLUIProps, ThemeProps } from "../../core"
import { omitThemeProps, ui, useComponentStyle } from "../../core"
import { cx } from "../../utils"

export interface EmProps extends HTMLUIProps<"em">, ThemeProps<"Em"> {}

/**
 * `Em` is a component that represents emphasized text. By default, it renders a `em` element.
 *
 * @see Docs https://yamada-ui.com/components/typography/em
 */
export const Em: FC<EmProps> = (props) => {
  const [css, mergedProps] = useComponentStyle("Em", props)
  const { className, ...rest } = omitThemeProps(mergedProps)

  return <ui.em className={cx("ui-em", className)} __css={css} {...rest} />
}

Em.__ui__ = "Em"
