import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Dock } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `DockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DockIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Dock} className={cx("ui-lucide-icon", className)} {...rest} />
)
