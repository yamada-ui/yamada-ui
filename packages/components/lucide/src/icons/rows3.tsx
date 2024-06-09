import { forwardRef } from "@yamada-ui/core"
import { Rows3 as Rows3Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Rows3Props = LucideIconProps

/**
 * `Rows3` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Rows3 = forwardRef<Rows3Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Rows3Icon} {...props} />
))
