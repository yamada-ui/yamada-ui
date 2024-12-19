import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Beef } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BeefIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BeefIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Beef} className={cx("ui-lucide-icon", className)} {...rest} />
)
