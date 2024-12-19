import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowBigLeft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowBigLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowBigLeftIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ArrowBigLeft}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
