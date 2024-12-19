import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ListTodo } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ListTodoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListTodoIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ListTodo} className={cx("ui-lucide-icon", className)} {...rest} />
)
