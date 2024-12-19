import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Grip } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GripIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GripIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Grip} className={cx("ui-lucide-icon", className)} {...rest} />
)
