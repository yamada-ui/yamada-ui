import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PenOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PenOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PenOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={PenOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
