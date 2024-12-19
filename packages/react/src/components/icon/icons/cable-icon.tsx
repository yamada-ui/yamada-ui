import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Cable } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CableIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CableIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Cable} className={cx("ui-lucide-icon", className)} {...rest} />
)
