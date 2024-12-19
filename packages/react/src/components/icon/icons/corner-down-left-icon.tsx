import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CornerDownLeft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CornerDownLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CornerDownLeftIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CornerDownLeft}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
