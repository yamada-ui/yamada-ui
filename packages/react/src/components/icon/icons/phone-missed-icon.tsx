import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PhoneMissed } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PhoneMissedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PhoneMissedIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PhoneMissed}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
