import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { InspectionPanel } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `InspectionPanelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const InspectionPanelIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={InspectionPanel}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
