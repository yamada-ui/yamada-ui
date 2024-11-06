import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Wrench as LucideWrenchIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `WrenchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WrenchIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideWrenchIcon} {...props} />
))

/**
 * @deprecated Use `WrenchIcon` instead.
 */
export const Wrench = WrenchIcon
