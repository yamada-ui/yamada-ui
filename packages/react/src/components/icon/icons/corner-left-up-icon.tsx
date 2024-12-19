import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CornerLeftUp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CornerLeftUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CornerLeftUpIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CornerLeftUp}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
