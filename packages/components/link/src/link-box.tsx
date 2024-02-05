import type { HTMLUIProps, ThemeProps, CSSUIObject } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  omitThemeProps,
  useComponentStyle,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"

type LinkOverlayOptions = {
  /**
   * If `true`, the link will open in new tab.
   *
   * @default false
   */
  isExternal?: boolean
}

export type LinkOverlayProps = HTMLUIProps<"a"> & LinkOverlayOptions

export const LinkOverlay = forwardRef<LinkOverlayProps, "a">(
  ({ className, isExternal, target, rel, href, children, ...rest }, ref) => {
    const css: CSSUIObject = {
      position: "static",
      _before: {
        content: '""',
        cursor: "inherit",
        display: "block",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
      },
    }
    return (
      <ui.a
        ref={ref}
        target={isExternal ? "_blank" : target}
        rel={isExternal ? "noopener" : rel}
        className={cx("ui-link-box__overlay", className)}
        href={href}
        __css={css}
        {...rest}
      >
        {children}
      </ui.a>
    )
  },
)

export type LinkBoxProps = HTMLUIProps<"div"> & ThemeProps<"LinkBox">

/**
 * `LinkBox` is a component that allows elements such as articles or cards to function as a single link.
 *
 * @see Docs https://yamada-ui.com/components/navigation/link-box
 */
export const LinkBox = forwardRef<LinkBoxProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentStyle("LinkBox", props)
  const { className, children, ...rest } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {
    "a[href]:not(.ui-link-box__overlay), abbr[title]": {
      position: "relative",
      zIndex: "yamcha",
    },
    ...styles,
  }

  return (
    <ui.div
      ref={ref}
      className={cx("ui-link-box", className)}
      __css={css}
      position="relative"
      {...rest}
    >
      {children}
    </ui.div>
  )
})
