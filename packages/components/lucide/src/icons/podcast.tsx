import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Podcast as PodcastIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Podcast` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Podcast = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PodcastIcon} {...props} />
))
