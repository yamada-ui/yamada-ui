import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CirclePlus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CirclePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CirclePlusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CirclePlus} className={cx("ui-lucide-icon", className)} {...rest} />
)
