import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SunDim } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SunDimIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SunDimIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={SunDim} className={cx("ui-lucide-icon", className)} {...rest} />
)
