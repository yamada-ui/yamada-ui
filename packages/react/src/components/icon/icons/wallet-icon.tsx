import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Wallet } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `WalletIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WalletIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Wallet} className={cx("ui-lucide-icon", className)} {...rest} />
)
