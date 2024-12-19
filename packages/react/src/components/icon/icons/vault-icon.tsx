import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Vault } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `VaultIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VaultIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Vault} className={cx("ui-lucide-icon", className)} {...rest} />
)
