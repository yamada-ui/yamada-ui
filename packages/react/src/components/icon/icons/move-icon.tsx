import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Move } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MoveIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Move} className={cx("ui-lucide-icon", className)} {...rest} />
)
