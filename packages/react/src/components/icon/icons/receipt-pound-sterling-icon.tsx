import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ReceiptPoundSterling } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ReceiptPoundSterlingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReceiptPoundSterlingIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={ReceiptPoundSterling}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
