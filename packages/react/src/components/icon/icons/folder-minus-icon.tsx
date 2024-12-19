import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FolderMinus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FolderMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderMinusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FolderMinus}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
