import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ScreenShare } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ScreenShareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScreenShareIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ScreenShare}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
