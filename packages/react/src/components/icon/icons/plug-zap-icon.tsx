import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PlugZap } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PlugZapIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PlugZapIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={PlugZap} className={cx("ui-lucide-icon", className)} {...rest} />
)
