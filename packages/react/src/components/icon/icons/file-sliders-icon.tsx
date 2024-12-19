import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileSliders } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileSlidersIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileSlidersIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FileSliders}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
