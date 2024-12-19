import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Vibrate } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `VibrateIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VibrateIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Vibrate} className={cx("ui-lucide-icon", className)} {...rest} />
)
