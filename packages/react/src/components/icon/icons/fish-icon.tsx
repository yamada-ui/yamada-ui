import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Fish } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FishIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FishIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Fish} className={cx("ui-lucide-icon", className)} {...rest} />
)
