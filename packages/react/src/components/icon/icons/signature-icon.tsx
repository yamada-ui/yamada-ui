import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Signature } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SignatureIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SignatureIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Signature} className={cx("ui-lucide-icon", className)} {...rest} />
)
