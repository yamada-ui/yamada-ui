import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TabletSmartphone } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TabletSmartphoneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TabletSmartphoneIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={TabletSmartphone}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
