import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileWarning } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileWarningIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileWarningIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FileWarning}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
