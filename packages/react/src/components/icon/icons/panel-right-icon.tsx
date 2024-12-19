import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PanelRight } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PanelRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelRightIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={PanelRight} className={cx("ui-lucide-icon", className)} {...rest} />
)
