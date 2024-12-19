import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BadgePercent } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BadgePercentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgePercentIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={BadgePercent}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
