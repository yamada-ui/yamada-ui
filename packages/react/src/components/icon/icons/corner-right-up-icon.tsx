import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CornerRightUp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CornerRightUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CornerRightUpIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CornerRightUp}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
