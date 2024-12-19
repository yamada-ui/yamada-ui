import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FerrisWheel } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FerrisWheelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FerrisWheelIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FerrisWheel}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
