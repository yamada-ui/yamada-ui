import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { EggOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `EggOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EggOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={EggOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
