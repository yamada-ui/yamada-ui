import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Captions } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CaptionsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CaptionsIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Captions} className={cx("ui-lucide-icon", className)} {...rest} />
)
