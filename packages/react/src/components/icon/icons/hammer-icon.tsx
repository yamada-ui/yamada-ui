import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Hammer } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HammerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HammerIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Hammer} className={cx("ui-lucide-icon", className)} {...rest} />
)
