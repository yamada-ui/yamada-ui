"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { Dict } from "../../utils"
import type { LinkBoxStyle } from "./link-box.style"
import {
  createSlotComponent,
  radiusProperties,
  styled,
  useExtractProps,
} from "../../core"
import { dataAttr } from "../../utils"
import { linkBoxStyle } from "./link-box.style"

interface ComponentContext extends Dict {}

export interface LinkBoxRootProps
  extends HTMLStyledProps,
    ThemeProps<LinkBoxStyle> {}

const {
  ComponentContext,
  PropsContext: LinkBoxPropsContext,
  useComponentContext,
  usePropsContext: useLinkBoxPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<LinkBoxRootProps, LinkBoxStyle, ComponentContext>(
  "link-box",
  linkBoxStyle,
)

export { LinkBoxPropsContext, useLinkBoxPropsContext }

/**
 * `LinkBox` is a component that allows elements such as articles or cards to function as a single link.
 *
 * @see https://yamada-ui.com/components/link-box
 */
export const LinkBoxRoot = withProvider<"div", LinkBoxRootProps>(
  ({ children, ...rest }) => {
    const context = useExtractProps(rest, radiusProperties)

    return (
      <ComponentContext value={context}>
        <styled.div {...rest}>{children}</styled.div>
      </ComponentContext>
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
  const context = useComponentContext()

  return {
    rel: external ? "noopener" : undefined,
    target: external ? "_blank" : undefined,
    "data-link-box-overlay": dataAttr(true),
    _before: { ..._before, ...context },
    ...rest,
  }
})
