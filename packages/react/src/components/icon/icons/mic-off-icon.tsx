import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MicOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MicOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MicOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={MicOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
