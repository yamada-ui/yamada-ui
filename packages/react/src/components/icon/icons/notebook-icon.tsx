import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Notebook } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `NotebookIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NotebookIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Notebook} className={cx("ui-lucide-icon", className)} {...rest} />
)
