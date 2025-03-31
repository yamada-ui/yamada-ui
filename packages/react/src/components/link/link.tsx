import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { LinkStyle } from "./link.style"
import { createComponent } from "../../core"
import { linkStyle } from "./link.style"

export interface LinkProps extends HTMLStyledProps<"a">, ThemeProps<LinkStyle> {
  /**
   * If `true`, the link will open in new tab.
   *
   * @default false
   */
  external?: boolean
}

export const {
  PropsContext: LinkPropsContext,
  usePropsContext: useLinkPropsContext,
  withContext,
} = createComponent<LinkProps, LinkStyle>("link", linkStyle)

/**
 * `Link` is a component for creating hyperlinks to different web pages, locations within the same page, or other URLs.
 *
 * @see Docs https://yamada-ui.com/components/link
 */
export const Link = withContext("a")(undefined, ({ external, ...rest }) => ({
  rel: external ? "noopener" : undefined,
  target: external ? "_blank" : undefined,
  ...rest,
}))
