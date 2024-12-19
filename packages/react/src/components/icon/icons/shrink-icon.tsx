import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Shrink } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ShrinkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShrinkIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Shrink} className={cx("ui-lucide-icon", className)} {...rest} />
)
