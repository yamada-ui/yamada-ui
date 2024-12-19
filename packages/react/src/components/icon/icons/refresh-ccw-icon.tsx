import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { RefreshCcw } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RefreshCcwIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RefreshCcwIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={RefreshCcw} className={cx("ui-lucide-icon", className)} {...rest} />
)
