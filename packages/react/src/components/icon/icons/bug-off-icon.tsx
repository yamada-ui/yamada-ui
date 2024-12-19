import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BugOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BugOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BugOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BugOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
