import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Diamond } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `DiamondIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DiamondIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Diamond} className={cx("ui-lucide-icon", className)} {...rest} />
)