import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquarePower } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquarePowerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquarePowerIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SquarePower}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
