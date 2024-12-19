import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Snail } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SnailIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SnailIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Snail} className={cx("ui-lucide-icon", className)} {...rest} />
)
