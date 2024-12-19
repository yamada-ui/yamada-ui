import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowUpAZ } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowUpAZIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpAZIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ArrowUpAZ} className={cx("ui-lucide-icon", className)} {...rest} />
)
