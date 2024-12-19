import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TrainFront } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TrainFrontIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TrainFrontIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={TrainFront} className={cx("ui-lucide-icon", className)} {...rest} />
)
