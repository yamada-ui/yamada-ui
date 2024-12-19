import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Currency } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CurrencyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CurrencyIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Currency} className={cx("ui-lucide-icon", className)} {...rest} />
)
