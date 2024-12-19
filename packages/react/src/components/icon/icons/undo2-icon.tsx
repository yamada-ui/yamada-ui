import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Undo2 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Undo2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Undo2Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Undo2} className={cx("ui-lucide-icon", className)} {...rest} />
)
