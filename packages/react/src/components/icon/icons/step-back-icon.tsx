import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { StepBack } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `StepBackIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StepBackIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={StepBack} className={cx("ui-lucide-icon", className)} {...rest} />
)
