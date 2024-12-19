import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PilcrowLeft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PilcrowLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PilcrowLeftIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PilcrowLeft}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
