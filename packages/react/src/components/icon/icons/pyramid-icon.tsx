import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Pyramid } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PyramidIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PyramidIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Pyramid} className={cx("ui-lucide-icon", className)} {...rest} />
)
