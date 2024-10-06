import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentStyle,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"

export interface HeadingProps
  extends HTMLUIProps<"h1">,
    ThemeProps<"Heading"> {}

/**
 * `Heading` is a component that represents section headings. By default, it renders an `h1` element.
 *
 * @see Docs https://yamada-ui.com/components/typography/heading
 */
export const Heading = forwardRef<HeadingProps, "h1">((props, ref) => {
  const [css, mergedProps] = useComponentStyle("Heading", props)
  const { className, ...rest } = omitThemeProps(mergedProps)

  return (
    <ui.h1
      ref={ref}
      className={cx("ui-heading", className)}
      __css={css}
      {...rest}
    />
  )
})

Heading.displayName = "Heading"
Heading.__ui__ = "Heading"
