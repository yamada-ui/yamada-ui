import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Construction } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ConstructionIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ConstructionIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={Construction}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
