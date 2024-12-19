import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CloudMoon } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CloudMoonIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudMoonIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CloudMoon} className={cx("ui-lucide-icon", className)} {...rest} />
)
