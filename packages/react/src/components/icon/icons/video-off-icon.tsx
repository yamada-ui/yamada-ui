import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { VideoOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `VideoOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VideoOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={VideoOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
