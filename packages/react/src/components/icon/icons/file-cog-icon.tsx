import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileCog } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileCogIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileCog} className={cx("ui-lucide-icon", className)} {...rest} />
)
