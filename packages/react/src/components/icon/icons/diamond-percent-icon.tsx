import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { DiamondPercent } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `DiamondPercentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DiamondPercentIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={DiamondPercent}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
