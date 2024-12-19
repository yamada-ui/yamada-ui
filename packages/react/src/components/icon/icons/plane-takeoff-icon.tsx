import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PlaneTakeoff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PlaneTakeoffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PlaneTakeoffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PlaneTakeoff}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
