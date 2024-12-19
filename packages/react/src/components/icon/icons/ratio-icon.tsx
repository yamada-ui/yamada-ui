import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Ratio } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RatioIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RatioIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Ratio} className={cx("ui-lucide-icon", className)} {...rest} />
)
