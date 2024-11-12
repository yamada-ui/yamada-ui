import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ArrowsUpFromLine as OriginalArrowsUpFromLine } from "lucide-react"

/**
 * `ArrowsUpFromLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowsUpFromLineIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalArrowsUpFromLine} {...props} />,
)

/**
 * `ArrowsUpFromLine` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ArrowsUpFromLineIcon` instead.
 */
export const ArrowsUpFromLine = ArrowsUpFromLineIcon
