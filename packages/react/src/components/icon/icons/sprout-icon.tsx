import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Sprout } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SproutIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SproutIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Sprout} className={cx("ui-lucide-icon", className)} {...rest} />
)
