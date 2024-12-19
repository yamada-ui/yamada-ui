import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Shell } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ShellIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShellIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Shell} className={cx("ui-lucide-icon", className)} {...rest} />
)
