import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Mail } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MailIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Mail} className={cx("ui-lucide-icon", className)} {...rest} />
)
