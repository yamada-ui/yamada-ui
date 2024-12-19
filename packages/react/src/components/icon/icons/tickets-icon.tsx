import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Tickets } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TicketsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TicketsIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Tickets} className={cx("ui-lucide-icon", className)} {...rest} />
)
