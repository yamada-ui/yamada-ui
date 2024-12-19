import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowUpFromLine } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowUpFromLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpFromLineIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ArrowUpFromLine}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
