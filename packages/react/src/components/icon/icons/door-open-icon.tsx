import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { DoorOpen } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `DoorOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DoorOpenIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={DoorOpen} className={cx("ui-lucide-icon", className)} {...rest} />
)
