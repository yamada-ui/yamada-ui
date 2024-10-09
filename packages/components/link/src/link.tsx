import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentStyle,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"

interface LinkOptions {
  /**
   * If `true`, the link will open in new tab.
   *
   * @default false
   */
  isExternal?: boolean
}

export interface LinkProps
  extends HTMLUIProps<"a">,
    ThemeProps<"Link">,
    LinkOptions {}

/**
 * `Link` is a component for creating hyperlinks to different web pages, locations within the same page, or other URLs.
 *
 * @see Docs https://yamada-ui.com/components/navigation/link
 */
export const Link = forwardRef<LinkProps, "a">((props, ref) => {
  const [css, mergedProps] = useComponentStyle("Link", props)
  const { className, isExternal, ...rest } = omitThemeProps(mergedProps)

  return (
    <ui.a
      ref={ref}
      target={isExternal ? "_blank" : undefined}
      className={cx("ui-link", className)}
      rel={isExternal ? "noopener" : undefined}
      __css={css}
      {...rest}
    />
  )
})
