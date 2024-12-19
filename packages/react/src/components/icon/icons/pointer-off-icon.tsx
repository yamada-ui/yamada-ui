import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PointerOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PointerOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PointerOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={PointerOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
