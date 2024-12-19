import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Scaling } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ScalingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScalingIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Scaling} className={cx("ui-lucide-icon", className)} {...rest} />
)
