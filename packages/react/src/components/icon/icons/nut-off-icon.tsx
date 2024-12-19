import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { NutOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `NutOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NutOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={NutOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
