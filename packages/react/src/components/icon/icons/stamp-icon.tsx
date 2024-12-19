import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Stamp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `StampIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StampIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Stamp} className={cx("ui-lucide-icon", className)} {...rest} />
)
