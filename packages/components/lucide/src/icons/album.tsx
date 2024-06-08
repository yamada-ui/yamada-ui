import { forwardRef } from "@yamada-ui/core"
import { Album as AlbumIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AlbumProps = LucideIconProps

/**
 * `Album` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Album = forwardRef<AlbumProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AlbumIcon} {...props} />
))
