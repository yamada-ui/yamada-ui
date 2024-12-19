import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { StepForward } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `StepForwardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StepForwardIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={StepForward}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
