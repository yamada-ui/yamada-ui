import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Sandwich as LucideSandwichIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SandwichIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SandwichIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSandwichIcon} {...props} />
))

/**
 * @deprecated Use `SandwichIcon` instead.
 */
export const Sandwich = SandwichIcon
