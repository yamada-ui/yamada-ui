import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ALargeSmall } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ALargeSmallIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ALargeSmallIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ALargeSmall}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
