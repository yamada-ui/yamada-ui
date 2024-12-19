import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Bone } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BoneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BoneIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Bone} className={cx("ui-lucide-icon", className)} {...rest} />
)
