import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Blocks } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BlocksIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BlocksIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Blocks} className={cx("ui-lucide-icon", className)} {...rest} />
)
