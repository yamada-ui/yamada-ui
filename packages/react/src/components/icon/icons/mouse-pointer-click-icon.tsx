import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MousePointerClick } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MousePointerClickIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MousePointerClickIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={MousePointerClick}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
