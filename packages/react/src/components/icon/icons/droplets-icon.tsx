import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Droplets } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `DropletsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DropletsIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Droplets} className={cx("ui-lucide-icon", className)} {...rest} />
)
