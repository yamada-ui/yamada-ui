import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareDashedMousePointer } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareDashedMousePointerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareDashedMousePointerIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={SquareDashedMousePointer}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
