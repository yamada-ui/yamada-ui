import { forwardRef } from "@yamada-ui/core"
import { GalleryHorizontal as GalleryHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GalleryHorizontalProps = LucideIconProps

/**
 * `GalleryHorizontal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GalleryHorizontal = forwardRef<GalleryHorizontalProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={GalleryHorizontalIcon} {...props} />
  ),
)
