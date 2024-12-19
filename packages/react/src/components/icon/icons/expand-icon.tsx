import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Expand } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ExpandIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ExpandIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Expand} className={cx("ui-lucide-icon", className)} {...rest} />
)
