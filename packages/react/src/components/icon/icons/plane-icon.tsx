import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Plane } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PlaneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PlaneIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Plane} className={cx("ui-lucide-icon", className)} {...rest} />
)
