import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareDashedBottom } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareDashedBottomIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareDashedBottomIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={SquareDashedBottom}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
