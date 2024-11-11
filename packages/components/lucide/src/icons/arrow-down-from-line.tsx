import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ArrowDownFromLine as OriginalArrowDownFromLine } from "lucide-react"

/**
 * `ArrowDownFromLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDownFromLineIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalArrowDownFromLine} {...props} />,
)

/**
 * `ArrowDownFromLine` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ArrowDownFromLineIcon` instead.
 */
export const ArrowDownFromLine = ArrowDownFromLineIcon
