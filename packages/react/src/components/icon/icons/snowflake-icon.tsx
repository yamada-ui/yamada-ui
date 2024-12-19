import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Snowflake } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SnowflakeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SnowflakeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Snowflake} className={cx("ui-lucide-icon", className)} {...rest} />
)
