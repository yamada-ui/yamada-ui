import type { HTMLUIProps, ThemeProps } from "../../core"
import type { Dict } from "../../utils"
import type { LinkBoxStyle } from "./link-box.style"
import {
  createSlotComponent,
  mergeVars,
  radiusProperties,
  ui,
  useCreateVars,
} from "../../core"
import { linkBoxStyle } from "./link-box.style"

interface LinkBoxContext {
  variableProps: Dict
}

export interface LinkBoxRootProps
  extends HTMLUIProps,
    ThemeProps<LinkBoxStyle> {}

export const {
  ComponentContext: LinkBoxContext,
  PropsContext: LinkBoxPropsContext,
  useComponentContext: useLinkBoxContext,
  usePropsContext: useLinkBoxPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<LinkBoxRootProps, LinkBoxStyle, LinkBoxContext>(
  "link-box",
  linkBoxStyle,
)

/**
 * `LinkBox` is a component that allows elements such as articles or cards to function as a single link.
 *
 * @see Docs https://yamada-ui.com/components/link-box
 */
export const LinkBoxRoot = withProvider<"div", LinkBoxRootProps>(
  ({ children, vars: varsProp, ...rest }) => {
    const [vars, variableProps] = useCreateVars(rest, radiusProperties)

    return (
      <LinkBoxContext value={{ variableProps }}>
        <ui.div {...rest} vars={mergeVars(vars, varsProp)}>
          {children}
        </ui.div>
      </LinkBoxContext>
    )
  },
  "root",
)()

export interface LinkBoxOverlayProps extends HTMLUIProps<"a"> {
  /**
   * If `true`, the link will open in new tab.
   *
   * @default false
   */
  external?: boolean
}

export const LinkBoxOverlay = withContext<"a", LinkBoxOverlayProps>(
  "a",
  "overlay",
)(undefined, ({ external, _before, ...rest }) => {
  const { variableProps } = useLinkBoxContext()

  return {
    rel: external ? "noopener" : undefined,
    target: external ? "_blank" : undefined,
    _before: { ..._before, ...variableProps },
    ...rest,
  }
})
