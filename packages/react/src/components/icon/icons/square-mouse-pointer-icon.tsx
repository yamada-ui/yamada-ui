import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareMousePointer } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareMousePointerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareMousePointerIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={SquareMousePointer}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
