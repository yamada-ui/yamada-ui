import type { CSSObject, HTMLUIProps, ThemeProps } from "../../core"
import type { LinkOverlayStyle } from "./link-overlay.style"
import { ui } from "../../core"
import { createComponent } from "../../core"
import { useLinkBoxContext } from "./link-box"
import { linkOverlayStyle } from "./link-overlay.style"

export const {
  PropsContext: LinkOverlayPropsContext,
  usePropsContext: useLinkOverlayPropsContext,
  withContext,
} = createComponent<LinkOverlayProps, LinkOverlayStyle>(
  "link-overlay",
  linkOverlayStyle,
)

export interface LinkOverlayProps extends HTMLUIProps<"a">, ThemeProps {
  /**
   * If `true`, the link will open in new tab.
   *
   * @default false
   */
  external?: boolean
}
export const LinkOverlay = withContext<"a", LinkOverlayProps>(
  ({ target, children, external, rel, ...rest }) => {
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
        css={css}
        rel={external ? "noopener" : rel}
        {...rest}
      >
        {children}
      </ui.a>
    )
  },
)()
