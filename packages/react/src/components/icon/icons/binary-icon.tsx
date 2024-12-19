import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Binary } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BinaryIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BinaryIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Binary} className={cx("ui-lucide-icon", className)} {...rest} />
)
