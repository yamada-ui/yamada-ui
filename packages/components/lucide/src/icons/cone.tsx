import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Cone as LucideConeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ConeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ConeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideConeIcon} {...props} />
))

/**
 * @deprecated Use `ConeIcon` instead.
 */
export const Cone = ConeIcon
