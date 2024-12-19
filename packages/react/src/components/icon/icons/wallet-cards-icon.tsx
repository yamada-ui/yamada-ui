import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { WalletCards } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `WalletCardsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WalletCardsIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={WalletCards}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
