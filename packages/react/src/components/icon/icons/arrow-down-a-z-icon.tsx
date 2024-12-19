import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowDownAZ } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowDownAZIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDownAZIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ArrowDownAZ}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
