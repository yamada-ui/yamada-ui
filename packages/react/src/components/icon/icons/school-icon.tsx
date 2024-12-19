import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { School } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SchoolIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SchoolIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={School} className={cx("ui-lucide-icon", className)} {...rest} />
)
