import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { RollerCoaster } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RollerCoasterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RollerCoasterIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={RollerCoaster}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
