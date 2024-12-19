import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircleHelp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleHelpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleHelpIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CircleHelp} className={cx("ui-lucide-icon", className)} {...rest} />
)
