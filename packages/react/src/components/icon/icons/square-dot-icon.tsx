import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareDot } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareDotIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={SquareDot} className={cx("ui-lucide-icon", className)} {...rest} />
)
