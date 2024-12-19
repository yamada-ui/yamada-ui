import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Drill } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `DrillIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DrillIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Drill} className={cx("ui-lucide-icon", className)} {...rest} />
)
