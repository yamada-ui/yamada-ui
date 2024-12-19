import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Hop } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HopIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HopIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Hop} className={cx("ui-lucide-icon", className)} {...rest} />
)
