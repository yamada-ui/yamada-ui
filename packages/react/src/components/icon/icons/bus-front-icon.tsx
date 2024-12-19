import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BusFront } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BusFrontIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BusFrontIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BusFront} className={cx("ui-lucide-icon", className)} {...rest} />
)
