import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Bus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Bus} className={cx("ui-lucide-icon", className)} {...rest} />
)
