import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Pen } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PenIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Pen} className={cx("ui-lucide-icon", className)} {...rest} />
)
