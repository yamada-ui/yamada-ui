import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { GlassWater } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GlassWaterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GlassWaterIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={GlassWater} className={cx("ui-lucide-icon", className)} {...rest} />
)
