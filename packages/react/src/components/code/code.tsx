import type { FC, HTMLUIProps, ThemeProps } from "../../core"
import { omitThemeProps, ui, useComponentStyle } from "../../core"
import { cx } from "../../utils"

export interface CodeProps extends HTMLUIProps<"code">, ThemeProps<"Code"> {}

/**
 * `Code` is a component that represents a code block. By default, it renders a `code` element.
 *
 * @see Docs https://yamada-ui.com/components/typography/code
 */
export const Code: FC<CodeProps> = (props) => {
  const [css, mergedProps] = useComponentStyle("Code", props)
  const { className, ...rest } = omitThemeProps(mergedProps)

  return <ui.code className={cx("ui-code", className)} __css={css} {...rest} />
}

Code.__ui__ = "Code"
