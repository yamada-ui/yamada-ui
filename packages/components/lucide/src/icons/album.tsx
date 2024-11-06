import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Album as LucideAlbumIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlbumIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlbumIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideAlbumIcon} {...props} />
))

/**
 * @deprecated Use `AlbumIcon` instead.
 */
export const Album = AlbumIcon
