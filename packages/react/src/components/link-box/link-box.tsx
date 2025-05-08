import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { Dict } from "../../utils"
import type { LinkBoxStyle } from "./link-box.style"
import {
  createSlotComponent,
  mergeVars,
  radiusProperties,
  styled,
  useCreateVars,
} from "../../core"
import { linkBoxStyle } from "./link-box.style"

interface LinkBoxContext {
  variableProps: Dict
}

export interface LinkBoxRootProps
  extends HTMLStyledProps,
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
 * @see https://yamada-ui.com/components/link-box
 */
export const LinkBoxRoot = withProvider<"div", LinkBoxRootProps>(
  ({ children, vars: varsProp, ...rest }) => {
    const [vars, variableProps] = useCreateVars(rest, radiusProperties)

    return (
      <LinkBoxContext value={{ variableProps }}>
        <styled.div {...rest} vars={mergeVars(vars, varsProp)}>
          {children}
        </styled.div>
      </LinkBoxContext>
    )
  },
  "root",
)()

export interface LinkBoxOverlayProps extends HTMLStyledProps<"a"> {
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
