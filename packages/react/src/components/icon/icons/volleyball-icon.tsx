import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Volleyball } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `VolleyballIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VolleyballIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Volleyball} className={cx("ui-lucide-icon", className)} {...rest} />
)
