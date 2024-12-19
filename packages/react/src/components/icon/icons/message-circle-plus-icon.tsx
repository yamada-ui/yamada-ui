import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MessageCirclePlus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MessageCirclePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCirclePlusIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={MessageCirclePlus}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
