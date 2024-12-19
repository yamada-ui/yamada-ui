import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { UnfoldVertical } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `UnfoldVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UnfoldVerticalIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={UnfoldVertical}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
