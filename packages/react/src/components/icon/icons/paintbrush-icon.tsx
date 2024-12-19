import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Paintbrush } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PaintbrushIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PaintbrushIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Paintbrush} className={cx("ui-lucide-icon", className)} {...rest} />
)
