import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Magnet } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MagnetIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MagnetIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Magnet} className={cx("ui-lucide-icon", className)} {...rest} />
)
