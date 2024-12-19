import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircleAlert } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleAlertIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleAlertIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CircleAlert}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
