import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Columns2 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Columns2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Columns2Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Columns2} className={cx("ui-lucide-icon", className)} {...rest} />
)
