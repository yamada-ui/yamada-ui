import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AlignJustify } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlignJustifyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignJustifyIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={AlignJustify}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
