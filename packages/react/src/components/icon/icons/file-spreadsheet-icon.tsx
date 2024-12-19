import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileSpreadsheet } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileSpreadsheetIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileSpreadsheetIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FileSpreadsheet}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
