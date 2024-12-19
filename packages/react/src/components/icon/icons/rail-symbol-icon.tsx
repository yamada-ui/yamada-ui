import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { RailSymbol } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RailSymbolIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RailSymbolIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={RailSymbol} className={cx("ui-lucide-icon", className)} {...rest} />
)
