import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Infinity } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `InfinityIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const InfinityIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Infinity} className={cx("ui-lucide-icon", className)} {...rest} />
)
