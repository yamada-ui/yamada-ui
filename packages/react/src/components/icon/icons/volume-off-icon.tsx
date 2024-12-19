import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { VolumeOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `VolumeOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VolumeOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={VolumeOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
