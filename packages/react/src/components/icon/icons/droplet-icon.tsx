import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Droplet } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `DropletIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DropletIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Droplet} className={cx("ui-lucide-icon", className)} {...rest} />
)
