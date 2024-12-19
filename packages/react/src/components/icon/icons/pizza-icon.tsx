import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Pizza } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PizzaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PizzaIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Pizza} className={cx("ui-lucide-icon", className)} {...rest} />
)
