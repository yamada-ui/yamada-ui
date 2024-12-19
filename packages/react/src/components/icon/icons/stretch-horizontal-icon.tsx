import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { StretchHorizontal } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `StretchHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StretchHorizontalIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={StretchHorizontal}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
