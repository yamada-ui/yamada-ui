import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FlameKindling } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FlameKindlingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlameKindlingIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FlameKindling}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
