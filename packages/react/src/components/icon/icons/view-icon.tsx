import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { View } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ViewIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ViewIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={View} className={cx("ui-lucide-icon", className)} {...rest} />
)
