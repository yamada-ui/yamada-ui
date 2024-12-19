import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { OctagonPause } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `OctagonPauseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const OctagonPauseIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={OctagonPause}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
