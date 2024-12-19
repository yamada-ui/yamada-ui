import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Toilet } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ToiletIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ToiletIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Toilet} className={cx("ui-lucide-icon", className)} {...rest} />
)
