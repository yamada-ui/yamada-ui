import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Disc } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `DiscIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DiscIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Disc} className={cx("ui-lucide-icon", className)} {...rest} />
)
