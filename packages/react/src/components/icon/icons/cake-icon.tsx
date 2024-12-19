import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Cake } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CakeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CakeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Cake} className={cx("ui-lucide-icon", className)} {...rest} />
)
