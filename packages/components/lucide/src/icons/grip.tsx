import { forwardRef } from "@yamada-ui/core"
import { Grip as GripIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GripProps = LucideIconProps

/**
 * `Grip` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Grip = forwardRef<GripProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={GripIcon} {...props} />
))
