import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ShieldAlert } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ShieldAlertIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldAlertIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ShieldAlert}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
