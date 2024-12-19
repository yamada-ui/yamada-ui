import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Cuboid } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CuboidIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CuboidIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Cuboid} className={cx("ui-lucide-icon", className)} {...rest} />
)
