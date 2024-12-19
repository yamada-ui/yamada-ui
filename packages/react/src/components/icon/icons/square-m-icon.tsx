import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareM } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareMIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareMIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={SquareM} className={cx("ui-lucide-icon", className)} {...rest} />
)
