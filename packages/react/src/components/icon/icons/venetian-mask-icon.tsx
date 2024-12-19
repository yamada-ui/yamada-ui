import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { VenetianMask } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `VenetianMaskIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VenetianMaskIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={VenetianMask}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
