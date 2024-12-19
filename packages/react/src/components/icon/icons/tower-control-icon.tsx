import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TowerControl } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TowerControlIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TowerControlIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={TowerControl}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
