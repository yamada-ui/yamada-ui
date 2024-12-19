import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Bug } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BugIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BugIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Bug} className={cx("ui-lucide-icon", className)} {...rest} />
)
