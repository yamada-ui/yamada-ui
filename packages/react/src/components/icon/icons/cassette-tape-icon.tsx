import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CassetteTape } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CassetteTapeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CassetteTapeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CassetteTape}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
