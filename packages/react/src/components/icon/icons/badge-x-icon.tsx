import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BadgeX } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BadgeXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeXIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BadgeX} className={cx("ui-lucide-icon", className)} {...rest} />
)
