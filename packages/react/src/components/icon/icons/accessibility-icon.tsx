import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Accessibility } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AccessibilityIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AccessibilityIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={Accessibility}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
