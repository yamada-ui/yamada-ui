import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Computer } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ComputerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ComputerIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Computer} className={cx("ui-lucide-icon", className)} {...rest} />
)
