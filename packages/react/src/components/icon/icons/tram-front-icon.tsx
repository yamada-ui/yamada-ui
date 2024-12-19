import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TramFront } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TramFrontIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TramFrontIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={TramFront} className={cx("ui-lucide-icon", className)} {...rest} />
)
