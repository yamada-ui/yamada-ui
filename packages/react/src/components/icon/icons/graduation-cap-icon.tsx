import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { GraduationCap } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GraduationCapIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GraduationCapIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={GraduationCap}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
