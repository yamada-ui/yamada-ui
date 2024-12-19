import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Banknote } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BanknoteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BanknoteIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Banknote} className={cx("ui-lucide-icon", className)} {...rest} />
)
