import { forwardRef } from "@yamada-ui/core"
import { Slack as SlackIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SlackProps = LucideIconProps

/**
 * `Slack` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Slack = forwardRef<SlackProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SlackIcon} {...props} />
))
