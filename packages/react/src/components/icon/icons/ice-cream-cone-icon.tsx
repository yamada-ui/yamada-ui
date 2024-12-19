import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { IceCreamCone } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `IceCreamConeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IceCreamConeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={IceCreamCone}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
