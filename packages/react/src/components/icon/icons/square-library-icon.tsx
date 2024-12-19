import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareLibrary } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareLibraryIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareLibraryIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SquareLibrary}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
