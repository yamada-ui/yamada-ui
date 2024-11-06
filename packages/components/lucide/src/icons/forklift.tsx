import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Forklift as LucideForkliftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ForkliftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ForkliftIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideForkliftIcon} {...props} />
))

/**
 * @deprecated Use `ForkliftIcon` instead.
 */
export const Forklift = ForkliftIcon
