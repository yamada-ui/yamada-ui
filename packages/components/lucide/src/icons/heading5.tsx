import { forwardRef } from "@yamada-ui/core"
import { Heading5 as Heading5Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Heading5Props = LucideIconProps

/**
 * `Heading5` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Heading5 = forwardRef<Heading5Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Heading5Icon} {...props} />
))
