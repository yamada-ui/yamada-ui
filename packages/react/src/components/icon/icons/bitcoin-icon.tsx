import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Bitcoin } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BitcoinIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BitcoinIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Bitcoin} className={cx("ui-lucide-icon", className)} {...rest} />
)
