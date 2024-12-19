import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Ticket } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TicketIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TicketIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Ticket} className={cx("ui-lucide-icon", className)} {...rest} />
)
