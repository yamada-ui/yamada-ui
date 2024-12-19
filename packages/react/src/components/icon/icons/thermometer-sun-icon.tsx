import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ThermometerSun } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ThermometerSunIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ThermometerSunIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ThermometerSun}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
