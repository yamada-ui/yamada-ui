import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { LocateOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LocateOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LocateOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={LocateOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
