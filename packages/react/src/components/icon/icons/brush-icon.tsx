import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Brush } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BrushIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BrushIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Brush} className={cx("ui-lucide-icon", className)} {...rest} />
)
