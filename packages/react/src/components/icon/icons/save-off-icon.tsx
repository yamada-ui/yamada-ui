import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SaveOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SaveOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SaveOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={SaveOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
