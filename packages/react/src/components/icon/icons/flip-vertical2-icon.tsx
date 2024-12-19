import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FlipVertical2 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FlipVertical2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlipVertical2Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FlipVertical2}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
