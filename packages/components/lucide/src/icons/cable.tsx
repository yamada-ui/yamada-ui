import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Cable as LucideCableIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CableIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CableIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCableIcon} {...props} />
))

/**
 * @deprecated Use `CableIcon` instead.
 */
export const Cable = CableIcon
