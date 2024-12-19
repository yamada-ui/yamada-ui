import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Ligature } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LigatureIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LigatureIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Ligature} className={cx("ui-lucide-icon", className)} {...rest} />
)
