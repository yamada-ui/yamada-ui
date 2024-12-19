import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { NotebookTabs } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `NotebookTabsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NotebookTabsIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={NotebookTabs}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
