import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MapPinned as LucideMapPinnedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MapPinnedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinnedIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideMapPinnedIcon} {...props} />,
)

/**
 * @deprecated Use `MapPinnedIcon` instead.
 */
export const MapPinned = MapPinnedIcon
