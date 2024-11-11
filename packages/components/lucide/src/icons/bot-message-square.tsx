import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { BotMessageSquare as OriginalBotMessageSquare } from "lucide-react"

/**
 * `BotMessageSquareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BotMessageSquareIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalBotMessageSquare} {...props} />,
)

/**
 * `BotMessageSquare` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `BotMessageSquareIcon` instead.
 */
export const BotMessageSquare = BotMessageSquareIcon
