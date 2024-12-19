import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowBigUpDash } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowBigUpDashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowBigUpDashIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ArrowBigUpDash}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
