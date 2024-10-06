import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Cylinder as CylinderIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Cylinder` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Cylinder = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CylinderIcon} {...props} />
))
