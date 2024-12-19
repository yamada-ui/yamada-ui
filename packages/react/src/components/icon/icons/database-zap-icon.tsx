import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { DatabaseZap } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `DatabaseZapIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DatabaseZapIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={DatabaseZap}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
