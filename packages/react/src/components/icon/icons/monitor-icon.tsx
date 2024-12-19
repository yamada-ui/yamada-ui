import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Monitor } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MonitorIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Monitor} className={cx("ui-lucide-icon", className)} {...rest} />
)
