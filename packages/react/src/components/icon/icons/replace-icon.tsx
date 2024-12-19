import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Replace } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ReplaceIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReplaceIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Replace} className={cx("ui-lucide-icon", className)} {...rest} />
)
