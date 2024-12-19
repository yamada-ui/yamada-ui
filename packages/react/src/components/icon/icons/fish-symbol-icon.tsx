import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FishSymbol } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FishSymbolIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FishSymbolIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FishSymbol} className={cx("ui-lucide-icon", className)} {...rest} />
)
