import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MilkOff as LucideMilkOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MilkOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MilkOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMilkOffIcon} {...props} />
))

/**
 * @deprecated Use `MilkOffIcon` instead.
 */
export const MilkOff = MilkOffIcon
