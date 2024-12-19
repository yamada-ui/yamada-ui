import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MoveDownRight } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MoveDownRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveDownRightIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={MoveDownRight}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
