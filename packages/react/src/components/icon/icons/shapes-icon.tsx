import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Shapes } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ShapesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShapesIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Shapes} className={cx("ui-lucide-icon", className)} {...rest} />
)
