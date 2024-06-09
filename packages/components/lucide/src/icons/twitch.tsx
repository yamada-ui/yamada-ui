import { forwardRef } from "@yamada-ui/core"
import { Twitch as TwitchIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TwitchProps = LucideIconProps

/**
 * `Twitch` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Twitch = forwardRef<TwitchProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TwitchIcon} {...props} />
))
