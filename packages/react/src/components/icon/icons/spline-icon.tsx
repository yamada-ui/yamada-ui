import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Spline } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SplineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SplineIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Spline} className={cx("ui-lucide-icon", className)} {...rest} />
)
