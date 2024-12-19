import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Squircle } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquircleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquircleIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Squircle} className={cx("ui-lucide-icon", className)} {...rest} />
)
