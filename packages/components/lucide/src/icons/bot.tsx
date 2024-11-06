import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Bot as LucideBotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BotIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBotIcon} {...props} />
))

/**
 * @deprecated Use `BotIcon` instead.
 */
export const Bot = BotIcon
