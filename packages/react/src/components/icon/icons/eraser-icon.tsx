import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Eraser } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `EraserIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EraserIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Eraser} className={cx("ui-lucide-icon", className)} {...rest} />
)
