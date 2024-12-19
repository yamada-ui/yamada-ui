import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SwitchCamera } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SwitchCameraIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SwitchCameraIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SwitchCamera}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
