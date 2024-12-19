import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Vegan } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `VeganIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VeganIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Vegan} className={cx("ui-lucide-icon", className)} {...rest} />
)
