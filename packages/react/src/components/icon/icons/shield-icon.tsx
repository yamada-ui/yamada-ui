import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Shield } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ShieldIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Shield} className={cx("ui-lucide-icon", className)} {...rest} />
)
