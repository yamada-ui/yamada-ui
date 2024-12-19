import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Dessert } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `DessertIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DessertIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Dessert} className={cx("ui-lucide-icon", className)} {...rest} />
)
