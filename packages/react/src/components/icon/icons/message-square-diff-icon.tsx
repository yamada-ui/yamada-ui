import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquareDiff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MessageSquareDiffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareDiffIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={MessageSquareDiff}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
