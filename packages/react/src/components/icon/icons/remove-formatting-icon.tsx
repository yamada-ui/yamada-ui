import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { RemoveFormatting } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RemoveFormattingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RemoveFormattingIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={RemoveFormatting}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
