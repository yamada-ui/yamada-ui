import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Stethoscope } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `StethoscopeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StethoscopeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={Stethoscope}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
