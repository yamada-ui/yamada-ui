import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Handshake } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HandshakeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HandshakeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Handshake} className={cx("ui-lucide-icon", className)} {...rest} />
)
