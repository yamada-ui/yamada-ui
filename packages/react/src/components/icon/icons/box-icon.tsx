import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Box } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BoxIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BoxIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Box} className={cx("ui-lucide-icon", className)} {...rest} />
)
