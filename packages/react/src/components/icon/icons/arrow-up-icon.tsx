import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowUp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ArrowUp} className={cx("ui-lucide-icon", className)} {...rest} />
)
