import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AlignRight } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlignRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignRightIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={AlignRight} className={cx("ui-lucide-icon", className)} {...rest} />
)
