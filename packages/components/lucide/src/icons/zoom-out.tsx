import { forwardRef } from "@yamada-ui/core"
import { ZoomOut as ZoomOutIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ZoomOutProps = LucideIconProps

/**
 * `ZoomOut` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ZoomOut = forwardRef<ZoomOutProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ZoomOutIcon} {...props} />
))
