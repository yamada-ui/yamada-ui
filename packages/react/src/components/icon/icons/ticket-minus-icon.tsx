import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TicketMinus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TicketMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TicketMinusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={TicketMinus}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
