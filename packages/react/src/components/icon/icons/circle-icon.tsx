import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Circle } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Circle} className={cx("ui-lucide-icon", className)} {...rest} />
)
