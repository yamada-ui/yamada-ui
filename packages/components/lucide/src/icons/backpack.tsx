import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Backpack as LucideBackpackIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BackpackIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BackpackIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBackpackIcon} {...props} />
))

/**
 * @deprecated Use `BackpackIcon` instead.
 */
export const Backpack = BackpackIcon
