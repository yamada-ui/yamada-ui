import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ToggleRight } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ToggleRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ToggleRightIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ToggleRight}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
