import type { HTMLUIProps } from "@yamada-ui/core"
import { ui } from "@yamada-ui/core"

export interface VisuallyHiddenProps extends HTMLUIProps<"span"> {}

/**
 * `VisuallyHidden` is a common technique used in web accessibility to hide content from the visual client, but keep it readable for screen readers.
 *
 * @see Docs https://yamada-ui.com/components/other/visually-hidden
 */
export const VisuallyHidden = ui("span", {
  baseStyle: {
    border: "0",
    clipPath: "rect(0px 0px 0px 0px)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px",
  },
})
VisuallyHidden.displayName = "VisuallyHidden"
VisuallyHidden.__ui__ = "VisuallyHidden"
