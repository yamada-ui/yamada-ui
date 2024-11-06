import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Rss as LucideRssIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RssIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RssIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideRssIcon} {...props} />
))

/**
 * @deprecated Use `RssIcon` instead.
 */
export const Rss = RssIcon
