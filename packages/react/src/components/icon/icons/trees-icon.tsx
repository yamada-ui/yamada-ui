import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Trees } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TreesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TreesIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Trees} className={cx("ui-lucide-icon", className)} {...rest} />
)
