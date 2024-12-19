import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Mic } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MicIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MicIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Mic} className={cx("ui-lucide-icon", className)} {...rest} />
)
