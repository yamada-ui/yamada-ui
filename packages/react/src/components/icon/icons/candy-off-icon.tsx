import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CandyOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CandyOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CandyOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CandyOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
