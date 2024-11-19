import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentStyle,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"

export interface CodeProps extends HTMLUIProps<"code">, ThemeProps<"Code"> {}

/**
 * `Code` is a component that represents a code block. By default, it renders a `code` element.
 *
 * @see Docs https://yamada-ui.com/components/typography/code
 */
export const Code = forwardRef<CodeProps, "code">((props, ref) => {
  const [css, mergedProps] = useComponentStyle("Code", props)
  const { className, ...rest } = omitThemeProps(mergedProps)

  return (
    <ui.code
      ref={ref}
      className={cx("ui-code", className)}
      __css={css}
      {...rest}
    />
  )
})

Code.displayName = "Code"
Code.__ui__ = "Code"
