import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TicketCheck } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TicketCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TicketCheckIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={TicketCheck}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
