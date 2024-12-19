import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Swords } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SwordsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SwordsIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Swords} className={cx("ui-lucide-icon", className)} {...rest} />
)
