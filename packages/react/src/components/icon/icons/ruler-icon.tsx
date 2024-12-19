import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Ruler } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RulerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RulerIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Ruler} className={cx("ui-lucide-icon", className)} {...rest} />
)
