import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { UmbrellaOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `UmbrellaOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UmbrellaOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={UmbrellaOff}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
