import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Wand } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `WandIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WandIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Wand} className={cx("ui-lucide-icon", className)} {...rest} />
)
