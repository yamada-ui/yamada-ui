import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Pin } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PinIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PinIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Pin} className={cx("ui-lucide-icon", className)} {...rest} />
)
