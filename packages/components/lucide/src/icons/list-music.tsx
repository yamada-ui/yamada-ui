import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ListMusic as LucideListMusicIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ListMusicIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListMusicIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideListMusicIcon} {...props} />,
)

/**
 * @deprecated Use `ListMusicIcon` instead.
 */
export const ListMusic = ListMusicIcon
