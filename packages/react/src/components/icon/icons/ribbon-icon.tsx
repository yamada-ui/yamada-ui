import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Ribbon } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RibbonIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RibbonIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Ribbon} className={cx("ui-lucide-icon", className)} {...rest} />
)
