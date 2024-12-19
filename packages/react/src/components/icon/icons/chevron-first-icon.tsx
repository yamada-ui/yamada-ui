import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronFirst } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChevronFirstIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronFirstIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ChevronFirst}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
