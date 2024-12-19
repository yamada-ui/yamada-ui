import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BringToFront } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BringToFrontIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BringToFrontIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={BringToFront}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
