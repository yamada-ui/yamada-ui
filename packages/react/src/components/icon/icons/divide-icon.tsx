import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Divide } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `DivideIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DivideIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Divide} className={cx("ui-lucide-icon", className)} {...rest} />
)
