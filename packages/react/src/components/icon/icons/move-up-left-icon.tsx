import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MoveUpLeft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MoveUpLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveUpLeftIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={MoveUpLeft} className={cx("ui-lucide-icon", className)} {...rest} />
)
