import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Refrigerator } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RefrigeratorIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RefrigeratorIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={Refrigerator}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
