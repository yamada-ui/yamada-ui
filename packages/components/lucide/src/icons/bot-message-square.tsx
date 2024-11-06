import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BotMessageSquare as LucideBotMessageSquareIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BotMessageSquareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BotMessageSquareIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBotMessageSquareIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BotMessageSquareIcon` instead.
 */
export const BotMessageSquare = BotMessageSquareIcon
