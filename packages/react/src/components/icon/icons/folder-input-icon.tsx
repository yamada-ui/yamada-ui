import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FolderInput } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FolderInputIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderInputIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FolderInput}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
