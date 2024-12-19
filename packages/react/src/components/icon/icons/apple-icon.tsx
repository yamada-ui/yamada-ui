import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Apple } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AppleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AppleIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Apple} className={cx("ui-lucide-icon", className)} {...rest} />
)
