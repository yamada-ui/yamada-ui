import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AlignLeft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlignLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignLeftIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={AlignLeft} className={cx("ui-lucide-icon", className)} {...rest} />
)
