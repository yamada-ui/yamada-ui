import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { LoaderPinwheel } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LoaderPinwheelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LoaderPinwheelIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={LoaderPinwheel}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
