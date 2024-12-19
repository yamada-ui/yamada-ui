import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MoveRight } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MoveRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveRightIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={MoveRight} className={cx("ui-lucide-icon", className)} {...rest} />
)
