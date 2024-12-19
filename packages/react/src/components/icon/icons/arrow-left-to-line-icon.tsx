import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowLeftToLine } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowLeftToLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowLeftToLineIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ArrowLeftToLine}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
