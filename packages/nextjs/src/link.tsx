import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  omitThemeProps,
  useComponentStyle,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { LinkProps as NextLinkProps } from "next/link"
import NextLink from "next/link"

type LegacyProps = "as" | "legacyBehavior" | "passHref"

export type LinkProps = Omit<
  HTMLUIProps<"a"> & ThemeProps<"Link">,
  keyof Omit<NextLinkProps, LegacyProps>
> &
  Omit<NextLinkProps, LegacyProps>

export const Link = forwardRef<LinkProps, "a">((props, ref) => {
  const [css, mergedProps] = useComponentStyle("Link", props)
  const { className, href, ...rest } = omitThemeProps(mergedProps)

  return (
    <ui.a
      ref={ref}
      className={cx("ui-link", className)}
      href={href as any}
      __css={css}
      {...rest}
      as={NextLink}
    />
  )
})
