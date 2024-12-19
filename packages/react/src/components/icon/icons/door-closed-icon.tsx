import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { DoorClosed } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `DoorClosedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DoorClosedIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={DoorClosed} className={cx("ui-lucide-icon", className)} {...rest} />
)
