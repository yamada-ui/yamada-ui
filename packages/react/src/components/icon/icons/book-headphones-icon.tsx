import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BookHeadphones } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BookHeadphonesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookHeadphonesIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={BookHeadphones}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
