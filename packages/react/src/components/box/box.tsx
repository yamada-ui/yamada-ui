import type { HTMLUIProps } from "../../core"
import { ui } from "../../core"

export interface BoxProps extends HTMLUIProps {}

/**
 * `Box` is the most abstract component on which all other components are built. By default, it renders a `div` element.
 *
 * @see Docs https://yamada-ui.com/components/box
 */
export const Box = ui("div")

Box.__ui__ = "Box"
