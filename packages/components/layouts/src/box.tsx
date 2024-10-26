import type { HTMLUIProps } from "@yamada-ui/core"
import { ui } from "@yamada-ui/core"

export interface BoxProps extends HTMLUIProps {}

/**
 * `Box` is the most abstract component on which all other components are built. By default, it renders a `div` element.
 *
 * @see Docs https://yamada-ui.com/components/layouts/box
 */
export const Box = ui("div")

Box.displayName = "Box"
Box.__ui__ = "Box"
