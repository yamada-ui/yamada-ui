import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { LassoSelect } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LassoSelectIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LassoSelectIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={LassoSelect}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
