import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ArrowBigLeftDash as OriginalArrowBigLeftDash } from "lucide-react"

/**
 * `ArrowBigLeftDashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowBigLeftDashIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalArrowBigLeftDash} {...props} />,
)

/**
 * `ArrowBigLeftDash` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ArrowBigLeftDashIcon` instead.
 */
export const ArrowBigLeftDash = ArrowBigLeftDashIcon
