import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { HardDrive } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HardDriveIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HardDriveIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={HardDrive} className={cx("ui-lucide-icon", className)} {...rest} />
)
