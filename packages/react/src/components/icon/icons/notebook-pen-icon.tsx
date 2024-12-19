import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { NotebookPen } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `NotebookPenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NotebookPenIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={NotebookPen}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
