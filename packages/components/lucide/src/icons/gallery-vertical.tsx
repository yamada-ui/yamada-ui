import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GalleryVertical as LucideGalleryVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GalleryVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GalleryVerticalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideGalleryVerticalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `GalleryVerticalIcon` instead.
 */
export const GalleryVertical = GalleryVerticalIcon
