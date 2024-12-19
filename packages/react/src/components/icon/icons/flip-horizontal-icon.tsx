import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FlipHorizontal } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FlipHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlipHorizontalIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FlipHorizontal}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
