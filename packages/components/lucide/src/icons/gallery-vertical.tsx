import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GalleryVertical as GalleryVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GalleryVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GalleryVertical = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={GalleryVerticalIcon} {...props} />,
)
