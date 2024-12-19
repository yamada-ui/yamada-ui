import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Cloud } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CloudIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Cloud} className={cx("ui-lucide-icon", className)} {...rest} />
)
