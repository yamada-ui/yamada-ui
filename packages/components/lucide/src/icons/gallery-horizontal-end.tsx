import { forwardRef } from "@yamada-ui/core"
import { GalleryHorizontalEnd as GalleryHorizontalEndIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GalleryHorizontalEndProps = LucideIconProps

/**
 * `GalleryHorizontalEnd` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GalleryHorizontalEnd = forwardRef<
  GalleryHorizontalEndProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={GalleryHorizontalEndIcon} {...props} />
))
