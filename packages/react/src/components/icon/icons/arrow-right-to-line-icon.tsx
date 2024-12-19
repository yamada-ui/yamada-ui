import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowRightToLine } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowRightToLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowRightToLineIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ArrowRightToLine}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
