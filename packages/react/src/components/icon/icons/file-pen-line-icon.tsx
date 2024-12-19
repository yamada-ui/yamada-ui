import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FilePenLine } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FilePenLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FilePenLineIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FilePenLine}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
