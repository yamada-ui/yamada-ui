import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { LogOut } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LogOutIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LogOutIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={LogOut} className={cx("ui-lucide-icon", className)} {...rest} />
)
