import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Cannabis } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CannabisIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CannabisIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Cannabis} className={cx("ui-lucide-icon", className)} {...rest} />
)
