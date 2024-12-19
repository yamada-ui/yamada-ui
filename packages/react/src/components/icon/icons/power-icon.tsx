import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Power } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PowerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PowerIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Power} className={cx("ui-lucide-icon", className)} {...rest} />
)
