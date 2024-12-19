import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowRight } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowRightIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ArrowRight} className={cx("ui-lucide-icon", className)} {...rest} />
)
