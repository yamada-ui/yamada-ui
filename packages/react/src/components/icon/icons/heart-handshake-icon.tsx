import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { HeartHandshake } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HeartHandshakeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HeartHandshakeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={HeartHandshake}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
