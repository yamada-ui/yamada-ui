import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareDashed } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareDashedIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SquareDashed}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
