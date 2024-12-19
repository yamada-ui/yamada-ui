import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ReceiptSwissFranc } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ReceiptSwissFrancIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReceiptSwissFrancIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={ReceiptSwissFranc}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
