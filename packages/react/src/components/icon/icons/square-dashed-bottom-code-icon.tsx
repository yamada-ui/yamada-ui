import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareDashedBottomCode } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareDashedBottomCodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareDashedBottomCodeIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={SquareDashedBottomCode}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
