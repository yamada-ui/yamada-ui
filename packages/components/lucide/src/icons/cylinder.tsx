import { forwardRef } from "@yamada-ui/core"
import { Cylinder as CylinderIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CylinderProps = LucideIconProps

/**
 * `Cylinder` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Cylinder = forwardRef<CylinderProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CylinderIcon} {...props} />
))
