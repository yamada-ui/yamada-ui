import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PanelLeft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PanelLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelLeftIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={PanelLeft} className={cx("ui-lucide-icon", className)} {...rest} />
)