import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MonitorSpeaker } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MonitorSpeakerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorSpeakerIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={MonitorSpeaker}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
