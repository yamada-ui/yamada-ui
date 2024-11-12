import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { IndentIncrease as OriginalIndentIncrease } from "lucide-react"

/**
 * `IndentIncreaseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IndentIncreaseIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalIndentIncrease} {...props} />
))

/**
 * `IndentIncrease` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `IndentIncreaseIcon` instead.
 */
export const IndentIncrease = IndentIncreaseIcon
