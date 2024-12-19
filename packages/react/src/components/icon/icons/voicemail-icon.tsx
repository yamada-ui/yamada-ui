import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Voicemail } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `VoicemailIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VoicemailIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Voicemail} className={cx("ui-lucide-icon", className)} {...rest} />
)
