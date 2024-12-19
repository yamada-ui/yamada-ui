import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Fullscreen } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FullscreenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FullscreenIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Fullscreen} className={cx("ui-lucide-icon", className)} {...rest} />
)
