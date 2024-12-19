import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MoveUp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MoveUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveUpIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={MoveUp} className={cx("ui-lucide-icon", className)} {...rest} />
)
