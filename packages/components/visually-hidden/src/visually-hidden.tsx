import type { HTMLUIProps } from "@yamada-ui/core"
import { ui } from "@yamada-ui/core"

export type VisuallyHiddenProps = HTMLUIProps<"span">

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
    width: "1px",
    margin: "-1px",
    padding: "0",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
  },
})
