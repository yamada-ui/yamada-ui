import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PanelsTopLeft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PanelsTopLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelsTopLeftIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PanelsTopLeft}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
