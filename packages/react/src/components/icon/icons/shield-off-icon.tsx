import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ShieldOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ShieldOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ShieldOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
