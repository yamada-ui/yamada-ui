import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Import } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ImportIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ImportIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Import} className={cx("ui-lucide-icon", className)} {...rest} />
)
