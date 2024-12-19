import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareDashedKanban } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareDashedKanbanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareDashedKanbanIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={SquareDashedKanban}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
