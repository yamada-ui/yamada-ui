import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Axis3d } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Axis3dIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Axis3dIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Axis3d} className={cx("ui-lucide-icon", className)} {...rest} />
)
