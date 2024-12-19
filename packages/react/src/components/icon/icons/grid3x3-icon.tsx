import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Grid3x3 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Grid3x3Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Grid3x3Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Grid3x3} className={cx("ui-lucide-icon", className)} {...rest} />
)
