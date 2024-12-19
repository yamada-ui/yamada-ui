import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Layers } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LayersIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LayersIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Layers} className={cx("ui-lucide-icon", className)} {...rest} />
)
