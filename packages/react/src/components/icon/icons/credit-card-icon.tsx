import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CreditCard } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CreditCardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CreditCardIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CreditCard} className={cx("ui-lucide-icon", className)} {...rest} />
)
