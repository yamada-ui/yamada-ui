import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TestTube } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TestTubeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TestTubeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={TestTube} className={cx("ui-lucide-icon", className)} {...rest} />
)
