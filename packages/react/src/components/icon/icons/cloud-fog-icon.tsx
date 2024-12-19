import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CloudFog } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CloudFogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudFogIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CloudFog} className={cx("ui-lucide-icon", className)} {...rest} />
)
