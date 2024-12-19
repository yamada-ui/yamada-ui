import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Music } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MusicIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MusicIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Music} className={cx("ui-lucide-icon", className)} {...rest} />
)
