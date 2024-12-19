import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Mouse } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MouseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MouseIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Mouse} className={cx("ui-lucide-icon", className)} {...rest} />
)
