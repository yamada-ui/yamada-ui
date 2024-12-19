import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TicketSlash } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TicketSlashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TicketSlashIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={TicketSlash}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
