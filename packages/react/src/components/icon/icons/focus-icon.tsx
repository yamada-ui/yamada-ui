import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Focus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FocusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FocusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Focus} className={cx("ui-lucide-icon", className)} {...rest} />
)
