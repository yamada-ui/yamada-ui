import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareSplitHorizontal } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareSplitHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareSplitHorizontalIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={SquareSplitHorizontal}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
