import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TypeOutline } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TypeOutlineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TypeOutlineIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={TypeOutline}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
