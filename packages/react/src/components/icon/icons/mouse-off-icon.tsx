import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MouseOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MouseOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MouseOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={MouseOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
