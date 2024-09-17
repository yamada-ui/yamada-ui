import type { HTMLUIProps } from "@yamada-ui/core"
import { ui } from "@yamada-ui/core"

export interface CenterProps extends HTMLUIProps {}

/**
 * `Center` is a component that aligns the child elements in the center within the component.
 *
 * @see Docs https://yamada-ui.com/components/layouts/center
 */
export const Center = ui("div", {
  baseStyle: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
})
