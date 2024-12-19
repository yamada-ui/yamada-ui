import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowBigRight } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowBigRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowBigRightIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ArrowBigRight}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
