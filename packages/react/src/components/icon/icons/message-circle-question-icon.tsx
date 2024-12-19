import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MessageCircleQuestion } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MessageCircleQuestionIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCircleQuestionIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={MessageCircleQuestion}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
