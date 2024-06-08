import { forwardRef } from "@yamada-ui/core"
import { Columns3 as Columns3Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Columns3Props = LucideIconProps

/**
 * `Columns3` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Columns3 = forwardRef<Columns3Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Columns3Icon} {...props} />
))
