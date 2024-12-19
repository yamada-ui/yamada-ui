import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Figma } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FigmaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FigmaIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Figma} className={cx("ui-lucide-icon", className)} {...rest} />
)
