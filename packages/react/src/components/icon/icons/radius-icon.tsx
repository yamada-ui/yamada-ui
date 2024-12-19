import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Radius } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RadiusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RadiusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Radius} className={cx("ui-lucide-icon", className)} {...rest} />
)
