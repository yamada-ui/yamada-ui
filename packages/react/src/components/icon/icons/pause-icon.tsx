import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Pause } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PauseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PauseIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Pause} className={cx("ui-lucide-icon", className)} {...rest} />
)
