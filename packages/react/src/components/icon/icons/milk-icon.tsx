import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Milk } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MilkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MilkIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Milk} className={cx("ui-lucide-icon", className)} {...rest} />
)
