import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AlignCenter } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlignCenterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignCenterIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={AlignCenter}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
