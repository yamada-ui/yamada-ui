import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Dot } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `DotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DotIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Dot} className={cx("ui-lucide-icon", className)} {...rest} />
)
