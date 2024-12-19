import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { RefreshCcwDot } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RefreshCcwDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RefreshCcwDotIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={RefreshCcwDot}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
