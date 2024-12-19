import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BellElectric } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BellElectricIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BellElectricIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={BellElectric}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
