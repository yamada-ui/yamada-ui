import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Tent } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TentIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Tent} className={cx("ui-lucide-icon", className)} {...rest} />
)
