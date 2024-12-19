import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MoveLeft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MoveLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveLeftIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={MoveLeft} className={cx("ui-lucide-icon", className)} {...rest} />
)
