import type { HTMLUIProps } from "../../core"
import { ui } from "../../core"

export interface VisuallyHiddenProps extends HTMLUIProps<"span"> {}

/**
 * `VisuallyHidden` is a common technique used in web accessibility to hide content from the visual client, but keep it readable for screen readers.
 *
 * @see Docs https://yamada-ui.com/components/other/visually-hidden
 */
export const VisuallyHidden = ui("span", {
  baseStyle: {
    border: "0",
    clip: "rect(0, 0, 0, 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px",
  },
})

VisuallyHidden.__ui__ = "VisuallyHidden"
