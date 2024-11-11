import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { MailWarning as OriginalMailWarning } from "lucide-react"

/**
 * `MailWarningIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailWarningIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalMailWarning} {...props} />
))

/**
 * `MailWarning` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `MailWarningIcon` instead.
 */
export const MailWarning = MailWarningIcon
