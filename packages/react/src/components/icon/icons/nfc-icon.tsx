import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Nfc } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `NfcIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NfcIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Nfc} className={cx("ui-lucide-icon", className)} {...rest} />
)
