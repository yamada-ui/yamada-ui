import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Presentation } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PresentationIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PresentationIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={Presentation}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
