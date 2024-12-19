import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SkipForward } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SkipForwardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SkipForwardIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SkipForward}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
