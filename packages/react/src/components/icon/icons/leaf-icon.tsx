import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Leaf } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LeafIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LeafIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Leaf} className={cx("ui-lucide-icon", className)} {...rest} />
)
