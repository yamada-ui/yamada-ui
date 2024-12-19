import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronLeft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChevronLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronLeftIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ChevronLeft}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
