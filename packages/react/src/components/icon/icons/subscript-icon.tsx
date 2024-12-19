import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Subscript } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SubscriptIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SubscriptIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Subscript} className={cx("ui-lucide-icon", className)} {...rest} />
)
