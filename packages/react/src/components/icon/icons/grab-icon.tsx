import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Grab } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GrabIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GrabIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Grab} className={cx("ui-lucide-icon", className)} {...rest} />
)
