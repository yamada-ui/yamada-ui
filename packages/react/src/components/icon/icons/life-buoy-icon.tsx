import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { LifeBuoy } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LifeBuoyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LifeBuoyIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={LifeBuoy} className={cx("ui-lucide-icon", className)} {...rest} />
)
