import type { ReactElement } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { Dict } from "../../utils"
import type { LinkBoxStyle } from "./link-box.style"
import { isValidElement } from "react"
import { createSlotComponent, radiusProperties, styled } from "../../core"
import { useExtractProps } from "../../core"
import { linkBoxStyle } from "./link-box.style"

interface LinkBoxContext extends Dict {}

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
  ({ children, ...rest }) => {
    const context = useExtractProps(rest, radiusProperties)

    return (
      <LinkBoxContext value={context}>
        <styled.div {...rest}>{children}</styled.div>
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
  const context = useLinkBoxContext()

  return {
    rel: external ? "noopener" : undefined,
    target: external ? "_blank" : undefined,
    _before: { ..._before, ...context },
    ...rest,
  }
})

/**
 * Reactの要素かどうかを判定する関数
 * @param element 判定対象の要素
 * @returns Reactの要素かどうか
 */
export const isReactElement = (element: unknown): element is ReactElement => {
  if (isValidElement(element)) return true

  return (
    typeof element === "object" &&
    element !== null &&
    "$$typeof" in element &&
    (element.$$typeof === Symbol.for("react.element") ||
      element.$$typeof === Symbol.for("react.forward_ref"))
  )
}
