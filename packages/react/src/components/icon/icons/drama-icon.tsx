import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Drama } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `DramaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DramaIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Drama} className={cx("ui-lucide-icon", className)} {...rest} />
)
