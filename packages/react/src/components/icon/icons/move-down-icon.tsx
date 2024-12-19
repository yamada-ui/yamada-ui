import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MoveDown } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MoveDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveDownIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={MoveDown} className={cx("ui-lucide-icon", className)} {...rest} />
)
