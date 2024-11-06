import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Cylinder as LucideCylinderIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CylinderIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CylinderIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCylinderIcon} {...props} />
))

/**
 * @deprecated Use `CylinderIcon` instead.
 */
export const Cylinder = CylinderIcon
