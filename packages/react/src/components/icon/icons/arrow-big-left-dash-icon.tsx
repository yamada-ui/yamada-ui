import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowBigLeftDash } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowBigLeftDashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowBigLeftDashIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ArrowBigLeftDash}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
