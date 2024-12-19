import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Calendar1 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Calendar1Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Calendar1Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Calendar1} className={cx("ui-lucide-icon", className)} {...rest} />
)
