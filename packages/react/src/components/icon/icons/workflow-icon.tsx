import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Workflow } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `WorkflowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WorkflowIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Workflow} className={cx("ui-lucide-icon", className)} {...rest} />
)
