import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PilcrowRight } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PilcrowRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PilcrowRightIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PilcrowRight}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
