import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MousePointerBan } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MousePointerBanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MousePointerBanIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={MousePointerBan}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
