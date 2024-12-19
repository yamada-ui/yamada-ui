import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ShoppingCart } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ShoppingCartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShoppingCartIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ShoppingCart}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
