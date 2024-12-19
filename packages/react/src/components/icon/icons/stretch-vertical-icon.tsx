import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { StretchVertical } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `StretchVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StretchVerticalIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={StretchVertical}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
