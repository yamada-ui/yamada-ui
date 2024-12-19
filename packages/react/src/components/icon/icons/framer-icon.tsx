import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Framer } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FramerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FramerIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Framer} className={cx("ui-lucide-icon", className)} {...rest} />
)
