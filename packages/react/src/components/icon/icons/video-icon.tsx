import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Video } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `VideoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VideoIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Video} className={cx("ui-lucide-icon", className)} {...rest} />
)
