import { forwardRef } from "@yamada-ui/core"
import { Disc3 as Disc3Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Disc3Props = LucideIconProps

/**
 * `Disc3` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Disc3 = forwardRef<Disc3Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Disc3Icon} {...props} />
))
