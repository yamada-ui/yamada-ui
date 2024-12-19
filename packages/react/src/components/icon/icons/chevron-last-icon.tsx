import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronLast } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChevronLastIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronLastIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ChevronLast}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
