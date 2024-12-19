import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ZoomOut } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ZoomOutIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ZoomOutIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ZoomOut} className={cx("ui-lucide-icon", className)} {...rest} />
)
