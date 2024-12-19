import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Thermometer } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ThermometerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ThermometerIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={Thermometer}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
