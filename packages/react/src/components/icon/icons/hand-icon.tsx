import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Hand } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HandIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HandIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Hand} className={cx("ui-lucide-icon", className)} {...rest} />
)
