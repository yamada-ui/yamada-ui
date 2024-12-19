import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { IndianRupee } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `IndianRupeeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IndianRupeeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={IndianRupee}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
