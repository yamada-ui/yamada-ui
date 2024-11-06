import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Milk as LucideMilkIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MilkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MilkIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMilkIcon} {...props} />
))

/**
 * @deprecated Use `MilkIcon` instead.
 */
export const Milk = MilkIcon
