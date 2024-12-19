import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { RefreshCw } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RefreshCwIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RefreshCwIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={RefreshCw} className={cx("ui-lucide-icon", className)} {...rest} />
)
