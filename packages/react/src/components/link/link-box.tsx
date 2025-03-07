import type { CSSObject, HTMLUIProps, ThemeProps } from "../../core"
import type { Dict } from "../../utils"
import type { LinkBoxStyle } from "./link-box.style"
import {
  createSlotComponent,
  mergeCSS,
  radiusProperties,
  ui,
  useCreateVars,
} from "../../core"
import { linkBoxStyle } from "./link-box.style"

interface LinkBoxContext {
  variableProps: Dict
}

export interface LinkBoxProps extends HTMLUIProps, ThemeProps<LinkBoxStyle> {}

export const {
  ComponentContext: LinkBoxContext,
  PropsContext: LinkBoxPropsContext,
  useComponentContext: useLinkBoxContext,
  usePropsContext: useLinkBoxPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<LinkBoxProps, LinkBoxStyle, LinkBoxContext>(
  "link-box",
  linkBoxStyle,
)

/**
 * `LinkBox` is a component that allows elements such as articles or cards to function as a single link.
 *
 * @see Docs https://yamada-ui.com/components/navigation/link-box
 */
export const LinkBox = withProvider(({ css: cssProp, children, ...rest }) => {
  const [vars, variableProps] = useCreateVars(rest, radiusProperties)

  const css: CSSObject = {
    "a[href]:not(.ui-link-box__overlay), abbr[title]": {
      position: "relative",
      zIndex: "fallback(yamcha, 1)",
    },
    position: "relative",
    vars,
  }

  return (
    <LinkBoxContext value={{ variableProps }}>
      <ui.div css={mergeCSS(cssProp, css)} {...rest}>
        {children}
      </ui.div>
    </LinkBoxContext>
  )
}, "container")()

export interface LinkOverlayProps extends HTMLUIProps<"a"> {
  /**
   * If `true`, the link will open in new tab.
   *
   * @default false
   */
  external?: boolean
}
export const LinkOverlay = withContext<"a", LinkOverlayProps>(
  ({ target, css: cssProp, children, external, rel, ...rest }) => {
    const { variableProps } = useLinkBoxContext()
    const css: CSSObject = {
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
    }

    return (
      <ui.a
        target={external ? "_blank" : target}
        css={mergeCSS(cssProp, css)}
        rel={external ? "noopener" : rel}
        {...rest}
      >
        {children}
      </ui.a>
    )
  },
  "overlay",
)()
