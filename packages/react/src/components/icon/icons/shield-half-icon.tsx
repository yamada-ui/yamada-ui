import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ShieldHalf } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ShieldHalfIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldHalfIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ShieldHalf} className={cx("ui-lucide-icon", className)} {...rest} />
)
