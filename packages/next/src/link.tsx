import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { Merge } from "@yamada-ui/utils"
import type { LinkProps as NextLinkProps } from "next/link"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentStyle,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import NextLink from "next/link"

export interface LinkProps
  extends Merge<HTMLUIProps<"a">, Omit<NextLinkProps, "as">>,
    ThemeProps<"Link"> {}

export const Link = forwardRef<LinkProps, "a">((props, ref) => {
  const [css, mergedProps] = useComponentStyle("Link", props)
  const { className, href, ...rest } = omitThemeProps(mergedProps)

  return (
    <ui.a
      ref={ref}
      as={NextLink}
      className={cx("ui-link", className)}
      href={href}
      __css={css}
      {...rest}
    />
  )
})
