import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ShoppingBasket } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ShoppingBasketIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShoppingBasketIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ShoppingBasket}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
