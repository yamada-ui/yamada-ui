import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PencilOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PencilOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PencilOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={PencilOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
