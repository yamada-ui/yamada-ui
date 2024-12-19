import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CornerDownRight } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CornerDownRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CornerDownRightIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CornerDownRight}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
