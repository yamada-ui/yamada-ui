import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MoveDownLeft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MoveDownLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveDownLeftIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={MoveDownLeft}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
