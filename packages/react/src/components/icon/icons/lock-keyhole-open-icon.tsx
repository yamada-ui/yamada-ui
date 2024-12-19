import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { LockKeyholeOpen } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LockKeyholeOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LockKeyholeOpenIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={LockKeyholeOpen}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
