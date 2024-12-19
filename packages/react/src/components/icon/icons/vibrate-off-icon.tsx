import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { VibrateOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `VibrateOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VibrateOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={VibrateOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
