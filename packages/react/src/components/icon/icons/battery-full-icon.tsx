import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BatteryFull } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BatteryFullIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BatteryFullIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={BatteryFull}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
