import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentStyle,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"

export interface EmProps extends HTMLUIProps<"em">, ThemeProps<"Em"> {}

/**
 * `Em` is a component that represents emphasized text. By default, it renders a `em` element.
 *
 * @see Docs https://yamada-ui.com/components/typography/em
 */
export const Em = forwardRef<EmProps, "em">((props, ref) => {
  const [css, mergedProps] = useComponentStyle("Em", props)
  const { className, ...rest } = omitThemeProps(mergedProps)

  return (
    <ui.em ref={ref} className={cx("ui-em", className)} __css={css} {...rest} />
  )
})

Em.displayName = "Em"
Em.__ui__ = "Em"
