import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FastForward } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FastForwardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FastForwardIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FastForward}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
