import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PencilRuler } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PencilRulerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PencilRulerIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PencilRuler}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
