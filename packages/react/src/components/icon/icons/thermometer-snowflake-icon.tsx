import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ThermometerSnowflake } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ThermometerSnowflakeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ThermometerSnowflakeIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={ThermometerSnowflake}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
