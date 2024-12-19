import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Dumbbell } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `DumbbellIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DumbbellIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Dumbbell} className={cx("ui-lucide-icon", className)} {...rest} />
)
