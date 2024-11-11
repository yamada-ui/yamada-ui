import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { IndentDecrease as OriginalIndentDecrease } from "lucide-react"

/**
 * `IndentDecreaseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IndentDecreaseIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalIndentDecrease} {...props} />
))

/**
 * `IndentDecrease` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `IndentDecreaseIcon` instead.
 */
export const IndentDecrease = IndentDecreaseIcon
