import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { WalletMinimal } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `WalletMinimalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WalletMinimalIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={WalletMinimal}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
