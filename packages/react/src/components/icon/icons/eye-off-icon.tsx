import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { EyeOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `EyeOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EyeOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={EyeOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
