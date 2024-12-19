import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareCheck } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareCheckIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SquareCheck}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
