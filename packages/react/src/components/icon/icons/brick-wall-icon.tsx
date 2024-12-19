import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BrickWall } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BrickWallIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BrickWallIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BrickWall} className={cx("ui-lucide-icon", className)} {...rest} />
)
