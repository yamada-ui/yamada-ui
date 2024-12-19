import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Contrast } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ContrastIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ContrastIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Contrast} className={cx("ui-lucide-icon", className)} {...rest} />
)
