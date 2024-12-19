import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Loader } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LoaderIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LoaderIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Loader} className={cx("ui-lucide-icon", className)} {...rest} />
)
