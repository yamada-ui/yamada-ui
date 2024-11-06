import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Slack as LucideSlackIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SlackIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SlackIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSlackIcon} {...props} />
))

/**
 * @deprecated Use `SlackIcon` instead.
 */
export const Slack = SlackIcon
