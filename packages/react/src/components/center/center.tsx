import type { HTMLUIProps } from "../../core"
import { ui } from "../../core"

export interface CenterProps extends HTMLUIProps {}

/**
 * `Center` is a component that aligns the child elements in the center within the component.
 *
 * @see Docs https://yamada-ui.com/components/layouts/center
 */
export const Center = ui("div", {
  baseStyle: {
    display: "flex",
    placeContent: "center",
    placeItems: "center",
  },
})

Center.__ui__ = "Center"
