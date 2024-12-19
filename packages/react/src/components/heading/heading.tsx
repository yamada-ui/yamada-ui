import type { FC, HTMLUIProps, ThemeProps } from "../../core"
import { omitThemeProps, ui, useComponentStyle } from "../../core"
import { cx } from "../../utils"

export interface HeadingProps
  extends HTMLUIProps<"h1">,
    ThemeProps<"Heading"> {}

/**
 * `Heading` is a component that represents section headings. By default, it renders an `h1` element.
 *
 * @see Docs https://yamada-ui.com/components/typography/heading
 */
export const Heading: FC<HeadingProps> = (props) => {
  const [css, mergedProps] = useComponentStyle("Heading", props)
  const { className, ...rest } = omitThemeProps(mergedProps)

  return <ui.h1 className={cx("ui-heading", className)} __css={css} {...rest} />
}

Heading.__ui__ = "Heading"
