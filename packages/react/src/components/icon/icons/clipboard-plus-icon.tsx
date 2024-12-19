import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ClipboardPlus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ClipboardPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardPlusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ClipboardPlus}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
