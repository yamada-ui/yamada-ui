import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ScissorsLineDashed as OriginalScissorsLineDashed } from "lucide-react"

/**
 * `ScissorsLineDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScissorsLineDashedIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalScissorsLineDashed} {...props} />,
)

/**
 * `ScissorsLineDashed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ScissorsLineDashedIcon` instead.
 */
export const ScissorsLineDashed = ScissorsLineDashedIcon
