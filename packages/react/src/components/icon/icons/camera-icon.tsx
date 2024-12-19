import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Camera } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CameraIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CameraIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Camera} className={cx("ui-lucide-icon", className)} {...rest} />
)
