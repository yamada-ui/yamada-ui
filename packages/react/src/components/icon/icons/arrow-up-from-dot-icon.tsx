import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowUpFromDot } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowUpFromDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpFromDotIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ArrowUpFromDot}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
