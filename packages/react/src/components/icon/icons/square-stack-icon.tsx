import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareStack } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareStackIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareStackIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SquareStack}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
