import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Cast } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CastIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CastIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Cast} className={cx("ui-lucide-icon", className)} {...rest} />
)
