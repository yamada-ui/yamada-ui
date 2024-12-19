import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Laptop } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LaptopIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LaptopIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Laptop} className={cx("ui-lucide-icon", className)} {...rest} />
)
