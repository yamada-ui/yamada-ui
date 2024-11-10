import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ArrowDownWideNarrow as OriginalArrowDownWideNarrow } from "lucide-react"

/**
 * `ArrowDownWideNarrowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDownWideNarrowIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalArrowDownWideNarrow} {...props} />
  ),
)

/**
 * `ArrowDownWideNarrow` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ArrowDownWideNarrowIcon` instead.
 */
export const ArrowDownWideNarrow = ArrowDownWideNarrowIcon
