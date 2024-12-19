import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileQuestion } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileQuestionIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileQuestionIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FileQuestion}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
