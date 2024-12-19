import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SendHorizontal } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SendHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SendHorizontalIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SendHorizontal}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
