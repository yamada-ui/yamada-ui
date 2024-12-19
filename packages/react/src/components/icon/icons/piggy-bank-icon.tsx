import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PiggyBank } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PiggyBankIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PiggyBankIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={PiggyBank} className={cx("ui-lucide-icon", className)} {...rest} />
)
