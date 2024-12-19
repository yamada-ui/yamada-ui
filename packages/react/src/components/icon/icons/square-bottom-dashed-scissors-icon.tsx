import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareBottomDashedScissors } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareBottomDashedScissorsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareBottomDashedScissorsIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={SquareBottomDashedScissors}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
