import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Asterisk } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AsteriskIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AsteriskIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Asterisk} className={cx("ui-lucide-icon", className)} {...rest} />
)
