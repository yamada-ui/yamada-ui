import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Pointer } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PointerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PointerIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Pointer} className={cx("ui-lucide-icon", className)} {...rest} />
)
