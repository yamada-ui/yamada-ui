import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Candy } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CandyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CandyIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Candy} className={cx("ui-lucide-icon", className)} {...rest} />
)
