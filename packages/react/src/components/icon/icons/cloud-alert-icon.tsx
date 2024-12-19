import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CloudAlert } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CloudAlertIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudAlertIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CloudAlert} className={cx("ui-lucide-icon", className)} {...rest} />
)
