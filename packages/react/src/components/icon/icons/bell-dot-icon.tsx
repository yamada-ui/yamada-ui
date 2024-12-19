import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BellDot } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BellDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BellDotIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BellDot} className={cx("ui-lucide-icon", className)} {...rest} />
)
