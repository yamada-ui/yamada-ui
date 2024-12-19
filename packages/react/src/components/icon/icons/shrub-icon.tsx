import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Shrub } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ShrubIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShrubIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Shrub} className={cx("ui-lucide-icon", className)} {...rest} />
)
