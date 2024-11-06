import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { DiscAlbum as LucideDiscAlbumIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DiscAlbumIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DiscAlbumIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideDiscAlbumIcon} {...props} />,
)

/**
 * @deprecated Use `DiscAlbumIcon` instead.
 */
export const DiscAlbum = DiscAlbumIcon
