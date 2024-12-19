import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TestTubeDiagonal } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TestTubeDiagonalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TestTubeDiagonalIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={TestTubeDiagonal}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
