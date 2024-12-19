import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CameraOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CameraOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CameraOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CameraOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
