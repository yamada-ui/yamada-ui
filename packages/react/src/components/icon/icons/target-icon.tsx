import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Target } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TargetIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TargetIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Target} className={cx("ui-lucide-icon", className)} {...rest} />
)
