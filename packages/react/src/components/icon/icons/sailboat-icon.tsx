import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Sailboat } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SailboatIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SailboatIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Sailboat} className={cx("ui-lucide-icon", className)} {...rest} />
)
