import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowDownZA } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowDownZAIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDownZAIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ArrowDownZA}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
