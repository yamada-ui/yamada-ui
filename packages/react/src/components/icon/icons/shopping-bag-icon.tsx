import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ShoppingBag } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ShoppingBagIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShoppingBagIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ShoppingBag}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
