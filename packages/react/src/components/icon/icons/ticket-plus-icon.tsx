import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TicketPlus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TicketPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TicketPlusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={TicketPlus} className={cx("ui-lucide-icon", className)} {...rest} />
)
