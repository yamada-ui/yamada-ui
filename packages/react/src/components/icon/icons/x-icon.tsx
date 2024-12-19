import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { X } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `XIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const XIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={X} className={cx("ui-lucide-icon", className)} {...rest} />
)
