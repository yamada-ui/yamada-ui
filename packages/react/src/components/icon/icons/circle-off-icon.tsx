import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircleOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CircleOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
