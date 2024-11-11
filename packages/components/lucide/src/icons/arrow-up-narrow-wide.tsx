import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ArrowUpNarrowWide as OriginalArrowUpNarrowWide } from "lucide-react"

/**
 * `ArrowUpNarrowWideIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpNarrowWideIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalArrowUpNarrowWide} {...props} />,
)

/**
 * `ArrowUpNarrowWide` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ArrowUpNarrowWideIcon` instead.
 */
export const ArrowUpNarrowWide = ArrowUpNarrowWideIcon
