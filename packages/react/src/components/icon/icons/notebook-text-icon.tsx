import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { NotebookText } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `NotebookTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NotebookTextIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={NotebookText}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
