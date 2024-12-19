import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { LogIn } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LogInIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LogInIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={LogIn} className={cx("ui-lucide-icon", className)} {...rest} />
)
