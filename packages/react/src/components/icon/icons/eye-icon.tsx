import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Eye } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `EyeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EyeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Eye} className={cx("ui-lucide-icon", className)} {...rest} />
)
