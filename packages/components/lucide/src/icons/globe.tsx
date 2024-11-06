import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Globe as LucideGlobeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GlobeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GlobeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideGlobeIcon} {...props} />
))

/**
 * @deprecated Use `GlobeIcon` instead.
 */
export const Globe = GlobeIcon
