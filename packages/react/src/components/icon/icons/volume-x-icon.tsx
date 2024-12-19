import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { VolumeX } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `VolumeXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VolumeXIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={VolumeX} className={cx("ui-lucide-icon", className)} {...rest} />
)
