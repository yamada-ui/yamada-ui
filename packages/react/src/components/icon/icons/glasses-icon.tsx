import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Glasses } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GlassesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GlassesIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Glasses} className={cx("ui-lucide-icon", className)} {...rest} />
)
