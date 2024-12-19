import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FireExtinguisher } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FireExtinguisherIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FireExtinguisherIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FireExtinguisher}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
