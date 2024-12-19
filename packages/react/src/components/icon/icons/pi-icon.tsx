import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Pi } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PiIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PiIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Pi} className={cx("ui-lucide-icon", className)} {...rest} />
)
