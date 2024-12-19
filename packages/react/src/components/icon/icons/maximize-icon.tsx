import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Maximize } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MaximizeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MaximizeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Maximize} className={cx("ui-lucide-icon", className)} {...rest} />
)
