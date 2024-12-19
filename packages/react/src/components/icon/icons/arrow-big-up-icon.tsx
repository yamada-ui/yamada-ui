import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowBigUp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowBigUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowBigUpIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ArrowBigUp} className={cx("ui-lucide-icon", className)} {...rest} />
)
