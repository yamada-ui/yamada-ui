import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Twitch as LucideTwitchIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TwitchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TwitchIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTwitchIcon} {...props} />
))

/**
 * @deprecated Use `TwitchIcon` instead.
 */
export const Twitch = TwitchIcon
