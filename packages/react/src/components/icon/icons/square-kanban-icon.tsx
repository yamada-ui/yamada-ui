import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareKanban } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareKanbanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareKanbanIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SquareKanban}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
