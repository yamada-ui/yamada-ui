import type { CSSUIObject, HTMLUIProps, ThemeProps } from "../../core"
import type { Dict } from "../../utils"
import {
  forwardRef,
  omitThemeProps,
  radiusProperties,
  ui,
  useComponentMultiStyle,
  useCreateVars,
} from "../../core"
import { createContext, cx } from "../../utils"

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
  external?: boolean
}

export interface LinkOverlayProps
  extends HTMLUIProps<"a">,
    LinkOverlayOptions {}

export const LinkOverlay = forwardRef<LinkOverlayProps, "a">(
  ({ href, target, className, children, external, rel, ...rest }, ref) => {
    const { styles, variableProps } = useLinkBox()

    const css: CSSUIObject = {
      position: "static",
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
      ...styles.overlay,
    }

    return (
      <ui.a
        ref={ref}
        href={href}
        target={external ? "_blank" : target}
        className={cx("ui-link-box__overlay", className)}
        rel={external ? "noopener" : rel}
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
