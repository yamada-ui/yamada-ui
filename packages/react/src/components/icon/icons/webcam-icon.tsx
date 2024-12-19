import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Webcam } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `WebcamIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WebcamIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Webcam} className={cx("ui-lucide-icon", className)} {...rest} />
)
