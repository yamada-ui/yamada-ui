import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Biohazard } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BiohazardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BiohazardIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Biohazard} className={cx("ui-lucide-icon", className)} {...rest} />
)
