import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Sailboat as SailboatIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Sailboat` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Sailboat = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SailboatIcon} {...props} />
))
