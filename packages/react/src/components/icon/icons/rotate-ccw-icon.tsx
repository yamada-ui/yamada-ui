import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { RotateCcw } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RotateCcwIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RotateCcwIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={RotateCcw} className={cx("ui-lucide-icon", className)} {...rest} />
)
