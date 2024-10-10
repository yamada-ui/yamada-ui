import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Milk as MilkIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Milk` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Milk = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MilkIcon} {...props} />
))
