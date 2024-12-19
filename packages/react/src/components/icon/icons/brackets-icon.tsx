import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Brackets } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BracketsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BracketsIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Brackets} className={cx("ui-lucide-icon", className)} {...rest} />
)
