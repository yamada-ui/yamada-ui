import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Proportions } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ProportionsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ProportionsIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={Proportions}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
