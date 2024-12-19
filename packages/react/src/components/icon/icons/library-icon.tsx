import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Library } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LibraryIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LibraryIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Library} className={cx("ui-lucide-icon", className)} {...rest} />
)
