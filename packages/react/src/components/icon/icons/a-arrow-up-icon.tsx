import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AArrowUp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AArrowUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AArrowUpIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={AArrowUp} className={cx("ui-lucide-icon", className)} {...rest} />
)
