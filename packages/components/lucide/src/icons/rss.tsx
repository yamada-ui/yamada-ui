import { forwardRef } from "@yamada-ui/core"
import { Rss as RssIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RssProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Rss = forwardRef<RssProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RssIcon} {...props} />
))
