import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { KeySquare } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `KeySquareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const KeySquareIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={KeySquare} className={cx("ui-lucide-icon", className)} {...rest} />
)
