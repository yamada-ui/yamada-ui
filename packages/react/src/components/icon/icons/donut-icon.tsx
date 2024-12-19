import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Donut } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `DonutIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DonutIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Donut} className={cx("ui-lucide-icon", className)} {...rest} />
)
