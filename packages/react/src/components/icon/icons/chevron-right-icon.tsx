import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronRight } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChevronRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronRightIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ChevronRight}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
