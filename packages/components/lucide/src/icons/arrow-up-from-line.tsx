import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ArrowUpFromLine as OriginalArrowUpFromLine } from "lucide-react"

/**
 * `ArrowUpFromLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpFromLineIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalArrowUpFromLine} {...props} />,
)

/**
 * `ArrowUpFromLine` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ArrowUpFromLineIcon` instead.
 */
export const ArrowUpFromLine = ArrowUpFromLineIcon
