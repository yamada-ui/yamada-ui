import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import {
  forwardRef,
  omitThemeProps,
  radiusProperties,
  ui,
  useComponentMultiStyle,
  useCreateVars,
} from "@yamada-ui/core"
import { createContext, cx } from "@yamada-ui/utils"

interface LinkBoxContext {
  styles: { [key: string]: CSSUIObject | undefined }
  variableProps: Dict
}

const [LinkBoxProvider, useLinkBox] = createContext<LinkBoxContext>({
  name: "LinkBoxContext",
  errorMessage: `useLinkBox returned is 'undefined'. Seems you forgot to wrap the components in "<LinkBox />"`,
})

interface LinkOverlayOptions {
  /**
   * If `true`, the link will open in new tab.
   *
   * @default false
   */
  isExternal?: boolean
}

export interface LinkOverlayProps
  extends HTMLUIProps<"a">,
    LinkOverlayOptions {}

export const LinkOverlay = forwardRef<LinkOverlayProps, "a">(
  ({ className, children, href, isExternal, rel, target, ...rest }, ref) => {
    const { styles, variableProps } = useLinkBox()

    const css: CSSUIObject = {
      _before: {
        content: '""',
        cursor: "inherit",
        display: "block",
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        width: "100%",
        zIndex: 0,
        ...variableProps,
      },
      position: "static",
      ...styles.overlay,
    }

    return (
      <ui.a
        ref={ref}
        className={cx("ui-link-box__overlay", className)}
        href={href}
        rel={isExternal ? "noopener" : rel}
        target={isExternal ? "_blank" : target}
        __css={css}
        {...rest}
      >
        {children}
      </ui.a>
    )
  },
)

export type LinkBoxProps = HTMLUIProps & ThemeProps<"LinkBox">

/**
 * `LinkBox` is a component that allows elements such as articles or cards to function as a single link.
 *
 * @see Docs https://yamada-ui.com/components/navigation/link-box
 */
export const LinkBox = forwardRef<LinkBoxProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("LinkBox", props)
  const { className, children, ...rest } = omitThemeProps(mergedProps)
  const [vars, variableProps] = useCreateVars(rest, radiusProperties)

  const css: CSSUIObject = {
    "a[href]:not(.ui-link-box__overlay), abbr[title]": {
      position: "relative",
      zIndex: "fallback(yamcha, 1)",
    },
    position: "relative",
    vars,
    ...styles.container,
  }

  return (
    <LinkBoxProvider value={{ styles, variableProps }}>
      <ui.div
        ref={ref}
        className={cx("ui-link-box", className)}
        __css={css}
        {...rest}
      >
        {children}
      </ui.div>
    </LinkBoxProvider>
  )
})
