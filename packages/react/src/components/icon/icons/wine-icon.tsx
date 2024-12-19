import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Wine } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `WineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WineIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Wine} className={cx("ui-lucide-icon", className)} {...rest} />
)
