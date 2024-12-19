import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { EarOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `EarOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EarOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={EarOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
