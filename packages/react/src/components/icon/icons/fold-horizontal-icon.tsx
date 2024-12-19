import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FoldHorizontal } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FoldHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FoldHorizontalIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FoldHorizontal}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
