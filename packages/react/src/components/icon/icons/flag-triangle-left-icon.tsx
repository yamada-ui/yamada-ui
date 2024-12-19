import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FlagTriangleLeft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FlagTriangleLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlagTriangleLeftIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FlagTriangleLeft}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
