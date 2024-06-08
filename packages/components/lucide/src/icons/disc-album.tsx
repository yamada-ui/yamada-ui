import { forwardRef } from "@yamada-ui/core"
import { DiscAlbum as DiscAlbumIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DiscAlbumProps = LucideIconProps

/**
 * `DiscAlbum` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DiscAlbum = forwardRef<DiscAlbumProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DiscAlbumIcon} {...props} />
))
