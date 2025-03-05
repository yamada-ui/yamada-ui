import type { CSSObject, HTMLUIProps, ThemeProps } from "../../core"
import type { Dict } from "../../utils"
import type { LinkBoxStyle } from "./link-box.style"
import {
  createSlotComponent,
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
export const LinkBox = withProvider(({ children, ...rest }) => {
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
      <ui.div css={css} {...rest}>
        {children}
      </ui.div>
    </LinkBoxContext>
  )
}, "root")()
