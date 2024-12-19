import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FishOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FishOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FishOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FishOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
