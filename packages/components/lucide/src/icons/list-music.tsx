import { forwardRef } from "@yamada-ui/core"
import { ListMusic as ListMusicIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ListMusicProps = LucideIconProps

/**
 * `ListMusic` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListMusic = forwardRef<ListMusicProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ListMusicIcon} {...props} />
))
