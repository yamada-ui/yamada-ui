import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ArrowBigDownDash as OriginalArrowBigDownDash } from "lucide-react"

/**
 * `ArrowBigDownDashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowBigDownDashIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalArrowBigDownDash} {...props} />,
)

/**
 * `ArrowBigDownDash` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ArrowBigDownDashIcon` instead.
 */
export const ArrowBigDownDash = ArrowBigDownDashIcon
