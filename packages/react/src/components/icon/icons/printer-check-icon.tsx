import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PrinterCheck } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PrinterCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PrinterCheckIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PrinterCheck}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
