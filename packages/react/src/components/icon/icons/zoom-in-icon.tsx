import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ZoomIn } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ZoomInIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ZoomInIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ZoomIn} className={cx("ui-lucide-icon", className)} {...rest} />
)
