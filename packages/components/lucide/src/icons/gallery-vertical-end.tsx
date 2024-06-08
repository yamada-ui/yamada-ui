import { forwardRef } from "@yamada-ui/core"
import { GalleryVerticalEnd as GalleryVerticalEndIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GalleryVerticalEndProps = LucideIconProps

/**
 * `GalleryVerticalEnd` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GalleryVerticalEnd = forwardRef<GalleryVerticalEndProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={GalleryVerticalEndIcon} {...props} />
  ),
)
