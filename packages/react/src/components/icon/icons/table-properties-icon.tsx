import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TableProperties } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TablePropertiesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TablePropertiesIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={TableProperties}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
