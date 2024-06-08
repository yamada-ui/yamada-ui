import { forwardRef } from "@yamada-ui/core"
import { ZoomIn as ZoomInIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ZoomInProps = LucideIconProps

/**
 * `ZoomIn` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ZoomIn = forwardRef<ZoomInProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ZoomInIcon} {...props} />
))
